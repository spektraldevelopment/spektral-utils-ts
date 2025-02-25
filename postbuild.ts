import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const __filename: string  = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const filePath: string = path.join(__dirname, "package.json");

// Get path to dist folder
const distPath: string = path.join(__dirname, "dist");

// Read the root package.json file and create a new package.json file in the dist folder
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

} catch (error) {
    console.error("Error reading JSON file:", error);
}

// Read the README.md file and copy it to the dist folder
try {
    const readmePath: string = path.join(__dirname, "README.md");

    const readmeContent: string = fs.readFileSync(readmePath, "utf-8");

    const distReadmePath: string = path.join(distPath, "README.md");

    fs.writeFileSync(distReadmePath, readmeContent);

} catch (error) {
    console.error("Error reading README.md file:", error);
}