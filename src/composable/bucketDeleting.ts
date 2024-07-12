import { useBucketStore } from "@/store";
import { useConfirm } from "primevue/useconfirm";


export function useBucketDeleting() {

  const confirm = useConfirm();

  const bucketStore = useBucketStore();

  function deleteItem(id: number) {
    confirm.require({
      message: "Вы уверены, что хотите удалить?",
      header: "Подтверждение",
      icon: "pi pi-exclamation-triangle",
      rejectProps: {
        label: "Отмена",
        severity: "secondary",
        outlined: true,
      },
      acceptProps: {
        label: "Удалить",
        severity: "danger",
      },
      accept: () => {
        bucketStore.deleteItem(id)
      },
    });
  }


  return deleteItem;

}
