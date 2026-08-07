// src/services/report.service.js
import api from '../config/axios';

export const reportService = {
  getDashboardStats: () => api.get('/dashboard/stats'),
};