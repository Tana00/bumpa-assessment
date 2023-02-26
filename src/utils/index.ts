import cogoToast from "cogo-toast";

export const _formatNumber = (value: number | string) => {
  return new Intl.NumberFormat().format(Number(value));
};

export const showToast = (
  message: string,
  type: "success" | "info" | "loading" | "warn" | "error"
) => {
  switch (type) {
    case "success":
      cogoToast.success(message, { position: "top-right", hideAfter: 5 });
      break;
    case "info":
      cogoToast.info(message, { position: "top-right", hideAfter: 5 });
      break;
    case "loading":
      cogoToast.loading(message, { position: "top-right", hideAfter: 5 });
      break;
    case "warn":
      cogoToast.warn(message, { position: "top-right", hideAfter: 5 });
      break;
    case "error":
      cogoToast.error(message, { position: "top-right", hideAfter: 5 });
      break;

    default:
      cogoToast.info(message, { position: "top-right", hideAfter: 5 });
      break;
  }
};
