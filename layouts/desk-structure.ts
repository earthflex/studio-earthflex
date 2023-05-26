import { RxAvatar } from "react-icons/rx";
export const structure = (S: any) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Profile')
                .icon(RxAvatar)
                .child(
                    S.document()
                        .schemaType('profile')
                        .documentId('profile')
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem: { getId: () => string }) =>
                    !['profile'].includes(listItem.getId())
            ),
        ]);
