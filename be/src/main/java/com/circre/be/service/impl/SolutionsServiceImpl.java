package com.circre.be.service.impl;

import com.circre.be.entity.Solutions;
import com.circre.be.mapper.SolutionsMapper;
import com.circre.be.service.SolutionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.be.service.impl
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  20:05
 * {@code @Description:}TODO
 * {@code @Version:}1.0
 */
@Service
public class SolutionsServiceImpl implements SolutionsService {
    @Autowired
    private SolutionsMapper solutionsMapper;

    public void addSolutions(Long sessionId, Integer materialId) {
        Solutions solutions = Solutions.builder()
                .sessionId(sessionId)
                .materialId(materialId)
                .createdAt(LocalDateTime.now())
                .build();
        solutionsMapper.insert(solutions);
    }

    public List<Integer> getSolutions(Long sessionId) {
        return solutionsMapper.getMaterialIdsBySessionId(sessionId);
    }
}
