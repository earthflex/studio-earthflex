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
                        .schemaType('PROFILE')
                        .documentId('PROFILE')
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (listItem: { getId: () => string }) =>
                    !['PROFILE'].includes(listItem.getId())
            ),
        ]);
