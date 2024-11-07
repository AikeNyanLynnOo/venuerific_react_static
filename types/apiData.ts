export interface APIResponse {
  status: string | number;
  statusText: string;
  success: boolean;
  message?: string;
  data?: any;
  meta?: any;
}
