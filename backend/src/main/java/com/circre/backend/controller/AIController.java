package com.circre.backend.controller;

import com.circre.backend.entity.Activity;
import com.circre.backend.entity.Material;
import com.circre.backend.entity.Result;
import com.circre.backend.entity.Supplier;
import com.circre.backend.service.AIService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.backend.controller
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  11:23
 * {@code @Description:AI控制器，接收请求}
 * {@code @Version:}1.0
 */
@RestController
@RequestMapping("/ai")
@Slf4j
public class AIController {
    @Autowired
    private AIService aiService;    //引入AI服务类

    @PostMapping("/recommendMaterial")
    public Result<List<Material>> recommendMaterial(Integer designerId, String question) {
        return Result.success(aiService.recommendMaterial(designerId, question));
    }

    @PostMapping("/recommendSupplier")
    public Result<List<Supplier>> recommendSupplier(
            @RequestParam Integer designerId,
            @RequestBody List<Integer> materialIds) {
        return Result.success(aiService.recommendSupplier(designerId, materialIds));
    }

    @PostMapping("/recommendActivity")
    public Result<List<Activity>> recommendActivity(
            @RequestParam Integer designerId) {
        return Result.success(aiService.recommendActivity(designerId));
    }

}

