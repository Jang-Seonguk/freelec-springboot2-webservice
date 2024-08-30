//package com.jojoldu.book.springboot.domain.posts;
//
//////import org.junit.Test;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.Test;
//
////import org.junit.runner.Runwith;
//import org.junit.jupiter.api.extension.ExtendWith;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
////import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
////@Runwith(SpringRunner.class)
//@ExtendWith(SpringExtension.class)
//@SpringBootTest
//
//public class PostsRepositoryTest {
//
//    @Autowired
//    PostsRepository postsRepository;
//
//    @AfterEach
//    public void cleanup() {
//        postsRepository.deleteAll();
//    }
//
//    @Test
//    public void 게시글저장_불러오기() {
//        //given
//        String cpu = "테스트 cpu";
//        String mainboard = "테스트 mainboard";
//        String memory = "테스트 memory";
//        String storage = "테스트 storage";
//        String power = "테스트 power";
//
//        postsRepository.save(Posts.builder()
//                .cpu(cpu)
//                .mainboard(mainboard)
//                .memory(memory)
//                .storage(storage)
//                .power(power)
//                .build());
//
//        //when
//        List<Posts> postsList = postsRepository.findAll();
//
//        //then
//        Posts posts = postsList.get(0);
//        assertThat(posts.getCpu()).isEqualTo(cpu);
//        assertThat(posts.getMainboard()).isEqualTo(mainboard);
//        assertThat(posts.getMemory()).isEqualTo(memory);
//        assertThat(posts.getStorage()).isEqualTo(storage);
//        assertThat(posts.getPower()).isEqualTo(power);
//    }
//
//    @Test
//    public void BaseTimeEntity_등록() {
//        //given
//        LocalDateTime now = LocalDateTime.of(2019,6,4,0,0,0);
//        postsRepository.save(Posts.builder()
//                .cpu("cpu")
//                .mainboard("mainboard")
//                .memory("memory")
//                .storage("storage")
//                .power("power")
//                .build());
//
//        //when
//        List<Posts> postsList = postsRepository.findAll();
//
//        //then
//        Posts posts = postsList.get(0);
//
//        System.out.println(">>>>>>>>> createDate="+posts.getCreatedDate()+", modifiedDate="+posts.getModifiedDate());
//
//        assertThat(posts.getCreatedDate()).isAfter(now);
//        assertThat(posts.getModifiedDate()).isAfter(now);
//    }
//
//}
