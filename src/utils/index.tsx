export const getType=(target: any) => {
  return Object.prototype.toString.call(target).slice(8,-1)
}

/**
 * 下载文件
 * @param content 文件流
 * @param fileName 文件名称
 */
export const download = (content: any, fileName: string) => {
  const blob = new Blob([content], {
    type: 'application/octet-stream'
  });
  const a = document.createElement("a");
  const url = window.URL.createObjectURL(blob);
  const filename = fileName;
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

export {default as checkStatus} from './checkStatus'