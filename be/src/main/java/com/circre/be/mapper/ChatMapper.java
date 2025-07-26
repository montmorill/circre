package com.circre.be.mapper;

import com.circre.be.entity.Chat;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ChatMapper {
    void insertChat(Chat chat);
}
