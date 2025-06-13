//#region generated meta
type Inputs = {
    file_paths: string[];
};
type Outputs = {
    array: any[];
};
//#endregion

import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Partial<Outputs> | undefined | void> {

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
    const imageFiles = params.file_paths.filter(filePath => {
        const lowerCaseFilePath = filePath.toLowerCase();
        return imageExtensions.some(ext => lowerCaseFilePath.endsWith(ext));
    });

    return { array: imageFiles };
};