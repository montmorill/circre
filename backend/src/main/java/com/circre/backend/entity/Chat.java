package com.circre.backend.entity;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.backend.entity
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  19:16
 * {@code @Description:}TODO
 * {@code @Version:}1.0
 */
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 聊天记录实体类
 */
@Data
@Builder
public class Chat {
    private Long id;                // 会话ID
    private Integer userId;         // 用户ID
    private Integer type;           // 消息类型(0=用户消息,1=AI回复)
    private String content;         // 对话内容
    private LocalDateTime createdAt;// 创建时间
}