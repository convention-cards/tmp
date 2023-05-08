const MAX_FILE = 524288;

export function ProfilePictureUpdater() {
  // const getUploadUrl = api.profile.getUploadUrl.useMutation();
  // const clearPicture = api.profile.clearProfilePicture.useMutation();
  // const launch = useDialog();

  // const hiddenFileInput = useRef<HTMLInputElement>(null);

  // const launchFileBrowser = () => {
  //   hiddenFileInput.current?.click();
  // };

  // const fileChosen = async (file: File | undefined) => {
  //   if (file === undefined) {
  //     return;
  //   }

  //   if (file.size > MAX_FILE) {
  //     launch("text", {
  //       title: "File too big",
  //       text: "The maximum file size is 512kB. Please shrink your image then try again.",
  //       variant: "error",
  //     });

  //     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //     hiddenFileInput.current!.value = "";
  //     return;
  //   }

  //   const { fields, url } = await getUploadUrl.mutateAsync({
  //     type: file.type as "image/jpeg",
  //     filename: file.name,
  //   });

  //   const formData = new FormData();
  //   Object.entries({ ...fields, file }).forEach(([key, value]) => {
  //     formData.append(key, value as string);
  //   });
  //   console.log(url);
  //   console.log(fields);

  //   const upload = await fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (upload.ok) {
  //     location.reload();
  //   }
  // };

  // const clearProfilePicture = async () => {
  //   await clearPicture.mutateAsync();

  //   location.reload();
  // };

  return (
    <>
      {/* <div className="items-center py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
        <dt className="text-sm font-medium text-gray-500">Photo</dt>
        <dd className="mt-1 flex items-center text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span className="flex-grow">
            <UserAvatar size="big" />
          </span>
          <div className="flex flex-col items-end space-y-4">
            <GhostButton text="Update" onClick={launchFileBrowser} />
            <GhostButton text="Clear" onClick={clearProfilePicture} />
          </div>
        </dd>
      </div>

      <input
        type="file"
        ref={hiddenFileInput}
        onChange={(e) => fileChosen(e.target.files?.[0])}
        accept={"image/jpeg, image/png"}
        style={{ display: "none" }}
      /> */}
    </>
  );
}
