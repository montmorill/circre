package com.circre.backend.mapper;

import com.circre.backend.entity.Chat;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ChatMapper {
    void insertChat(Chat chat);
}
