package com.circre.be.controller;

import com.circre.be.entity.Result;
import com.circre.be.service.SolutionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.be.controller
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  19:40
 * {@code @Description:}
 * {@code @Version:}1.0
 */
@RestController
@RequestMapping("/solutions")
public class SolutionsController {
    @Autowired
    private SolutionsService solutionsService;
    //增加解决方案接口
    @PostMapping("/add")
    public Result addSolutions(@RequestParam Long sessionId, @RequestParam Integer materialId) {
        solutionsService.addSolutions(sessionId,materialId);
        return Result.success();
    }

    //查询解决方案接口
    @GetMapping("/get")
    public Result<List<Integer>> getSolutions(@RequestParam  Long sessionId) {
        return Result.success(solutionsService.getSolutions(sessionId));
    }
}