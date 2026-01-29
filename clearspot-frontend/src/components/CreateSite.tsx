import { useState } from "react";
import { useCreateSite } from "../hooks/useCreateSite";

const CreateSite = () => {
  const [name, setName] = useState("");
  const { mutate, isPending } = useCreateSite();

  const submit = () => {
    if (!name.trim()) return;

    mutate(name);
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter site name"
      />

      <button onClick={submit} disabled={isPending}>
        {isPending ? "Creating..." : "Create Site"}
      </button>
    </div>
  );
};

export default CreateSite;
