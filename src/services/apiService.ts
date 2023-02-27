import axios, { AxiosError, AxiosResponse } from "axios";
import { showToast } from "utils";

export const servicesBaseURL = {
  apiServiceURL: "https://restcountries.com/v3.1/",
};

const apiResource = () => {
  const service = axios.create({
    baseURL: `${servicesBaseURL.apiServiceURL}`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
    },
  });

  service.interceptors.response.use(
    (response: AxiosResponse) => {
      return response?.data;
    },
    (error: AxiosError) => {
      if (error?.response === undefined) {
        showToast("Unable to connect", "error");
        return error;
      } else {
        const status = error?.response?.status;
        const errors: any = error?.response?.data;

        if (status === 404) {
          showToast("Data not found", "error");
          return error;
        }

        const errorMessage = errors?.error || errors?.message;

        errorMessage && showToast(errorMessage, "error");

        return Promise.reject(errors);
      }
    }
  );

  interface IPostProps {
    url: string;
    payload?: object;
  }

  return {
    get: async (url: string) => {
      try {
        const data = service.get(url);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    post: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.post(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    patch: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.patch(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    delete: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.delete(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    put: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.put(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  };
};

export const countryService = apiResource();
