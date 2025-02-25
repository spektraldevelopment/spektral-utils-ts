import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const __filename: string  = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const filePath: string = path.join(__dirname, "package.json");

// Get path to dist folder
const distPath: string = path.join(__dirname, "dist");

try {
    const fileContent: string = fs.readFileSync(filePath, "utf-8");

    const pkg = JSON.parse(fileContent);

    const { name, version, description, author, keywords } = pkg;

    const keywordsString: string = keywords.toString();

    // convert keywords to array of strings
    const keywordArray: string[] = keywordsString.split(",").map((keyword: string) => keyword.trim());

    // Change directory to dist folder
    process.chdir(distPath);

    // Run npm init -y to create a package.json file adding the name, version, description, author, and license from the original package.json file
    execSync(`npm init -y`);

    execSync(`npm pkg set name=${name}`);

    execSync(`npm pkg set version=${version}`);

    execSync(`npm pkg set description="${description}"`);

    execSync(`npm pkg set author="${author}"`);

    keywordArray.forEach((keyword: string, index: number) => {
        execSync(`npm pkg set keywords[${index}]="${keyword}"`);
    });

    // Set type to module
    execSync(`npm pkg set type=module`);

} catch (error) {
    console.error("Error reading JSON file:", error);
}
