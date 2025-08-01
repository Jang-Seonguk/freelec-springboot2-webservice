package com.jojoldu.book.springboot.service.posts;

import com.jojoldu.book.springboot.domain.posts.Posts;
import com.jojoldu.book.springboot.domain.posts.PostsRepository;
import com.jojoldu.book.springboot.web.dto.PostsListResponseDto;
import com.jojoldu.book.springboot.web.dto.PostsResponseDto;
import com.jojoldu.book.springboot.web.dto.PostsSaveRequestDto;
import com.jojoldu.book.springboot.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class PostsService {
    private final PostsRepository postsRepository;

//    @Transactional
//    public Long save(PostsSaveRequestDto requestDto) {
//        return postsRepository.save(requestDto.toEntity()).getId();
//    }


//    @Transactional
//    public Long update(Long id, PostsUpdateRequestDto requestDto) {
//        Posts posts = postsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
//
//        posts.update(requestDto.getCpu(), requestDto.getMainboard(), requestDto.getMemory(), requestDto.getPower(), requestDto.getStorage());
//
//        return id;
//    }
//
//    @Transactional
//    public void delete (Long id) {
//        Posts posts = postsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
//
//        postsRepository.delete(posts);
//    }

//    public PostsResponseDto findById (Long id) {
//        Posts entity = postsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + id));
//        return new PostsResponseDto(entity);
//
//    }

//    public PostsResponseDto findAll () {
//        Posts entity = postsRepository.findAll();
//        return new PostsResponseDto(entity);
//    }

    @Transactional(readOnly = true)
    public List<PostsListResponseDto> findAllAsc () {
        return postsRepository.findAllAsc().stream().map(PostsListResponseDto::new).collect(Collectors.toList());
    }
}
