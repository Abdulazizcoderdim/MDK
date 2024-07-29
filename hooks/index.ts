export const useModalSrc = (photoSrc: string | null): string | null => {
    if (photoSrc === '/rasm1.png') {
      return 'rasm1';
    } else if (photoSrc === '/rasm2.png') {
      return 'rasm2';
    } else if (photoSrc === '/rasm3.png') {
      return 'rasm3';
    } else if (photoSrc === '/rasm4.png') {
      return 'rasm4';
    } else {
      return null;
    }
  };