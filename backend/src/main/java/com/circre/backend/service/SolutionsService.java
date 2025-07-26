package com.circre.backend.service;

import java.util.List;

public interface SolutionsService {
    void addSolutions(Long sessionId, Integer materialId);
    List<Integer> getSolutions(Long sessionId);
}
