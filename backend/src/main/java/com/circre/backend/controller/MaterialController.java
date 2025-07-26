package com.circre.backend.controller;

import com.circre.backend.entity.Material;
import com.circre.backend.entity.Result;
import com.circre.backend.service.MaterialService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.backend.controller
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  11:01
 * {@code @Description:}TODO
 * {@code @Version:}1.0
 */
@Slf4j
@RestController
@RequestMapping("/material")
public class MaterialController {
    @Autowired
    private MaterialService materialService;

    //根据id查询材料信息
    @GetMapping("/id/{id}")
    public Result<Material> getMaterialById(@PathVariable("id") Integer id) {
        log.info("根据id查询材料信息");
        return Result.success(materialService.getMaterialById(id));
    }

    //根据类型名查询材料信息
    @GetMapping("/type")
    public Result<List<Material>> getMaterialByType(@RequestParam("type") String type) {
        log.info("根据类型名查询材料信息");
        return Result.success(materialService.getMaterialByType(type));
    }
}
