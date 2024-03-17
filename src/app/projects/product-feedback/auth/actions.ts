"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import config from "../../../../../config";
import toast from "react-hot-toast";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);
  console.log(error);
  if (error) {
    // redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: newData, error } = await supabase.auth.signUp(data);
  // console.log(error, newData, "test");
  if (error) {
    // redirect("/error");
    console.log(error, "error");
    // toast.error(error.message);
  }

  revalidatePath("/", "layout");
  redirect(config.auth.callbackUrl);
}
