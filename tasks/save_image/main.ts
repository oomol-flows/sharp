import { Context } from "@oomol/types/oocana";

//#region generated meta
type Inputs = {
    sharp: any;
    save_address: string | null;
    image_name: string | null;
    image_format: "jpg" | "png";
};
type Outputs = {
    save_address: string;
};
//#endregion
//Your code is below this line


export default async function (
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {
    const { sharp, save_address, image_name, image_format } = params;

    const image_save_address = `${save_address ? save_address : context.sessionDir}/${image_name ? image_name : context.jobId}.${image_format ? image_format : 'jpg'}`;
    await sharp.toFile(image_save_address)

    return { save_address: image_save_address };
};
