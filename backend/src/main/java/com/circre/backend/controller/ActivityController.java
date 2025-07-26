package com.circre.backend.controller;

import com.circre.backend.entity.Activity;
import com.circre.backend.entity.Result;
import com.circre.backend.service.ActivityService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.backend.controller
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  13:33
 * {@code @Description:}TODO
 * {@code @Version:}1.0
 */
@RestController
@RequestMapping("/activity")
@Slf4j
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    @GetMapping("/{id}")
    public Result<Activity> getActivityById(@PathVariable("id") Integer id) {
        Activity activity = activityService.getActivityById(id);
        return Result.success(activity);
    }
}
