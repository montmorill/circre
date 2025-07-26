package com.circre.backend.mapper;

import com.circre.backend.entity.Solutions;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SolutionsMapper {
    void insert(Solutions solutions);

    //根据sessionId批量查询materialId
    List<Integer> getMaterialIdsBySessionId(Long sessionId);
}
