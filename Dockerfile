# 빌드 스테이지
FROM gradle:7.6-jdk11 AS builder
WORKDIR /app

# 의존성 캐싱을 위한 파일 복사
COPY build.gradle settings.gradle ./
COPY gradle ./gradle

# 의존성 다운로드 (캐시 활용)
RUN gradle dependencies --no-daemon --refresh-dependencies

# 소스코드 복사
COPY src ./src

# 빌드 실행 (테스트 제외)
RUN gradle clean build -x test --no-daemon

# 빌드된 JAR 파일 확인 및 이름 변경
RUN mv /app/build/libs/*-SNAPSHOT-*.jar /app/build/libs/app.jar 2>/dev/null || \
    mv /app/build/libs/*.jar /app/build/libs/app.jar

# 실행 스테이지
#FROM openjdk:11-jre-slim // 현재 Docker hub에서 제공하지 않음
FROM eclipse-temurin:11-jre-jammy
WORKDIR /app

# 타임존 설정 (한국 시간)
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# non-root 유저 생성 및 전환
RUN groupadd -r spring && useradd -r -g spring spring

# 빌드된 JAR 파일 복사
COPY --from=builder /app/build/libs/app.jar app.jar

# 파일 소유권 변경
RUN chown spring:spring app.jar

# 유저 전환
USER spring:spring

# 포트 노출
EXPOSE 8080

# JVM 메모리 설정 및 실행
# - Xms: 초기 힙 메모리
# - Xmx: 최대 힙 메모리
# - XX:MaxMetaspaceSize: 메타스페이스 최대 크기
ENTRYPOINT ["java", \
    "-Xms256m", \
    "-Xmx512m", \
    "-XX:MaxMetaspaceSize=256m", \
    "-Djava.security.egd=file:/dev/./urandom", \
    "-jar", \
    "app.jar"]

# 헬스체크 (선택사항)
#HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
#    CMD curl -f http://localhost:8080/actuator/health || exit 1