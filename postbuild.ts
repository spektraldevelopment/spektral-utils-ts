import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { exec, execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath: string = path.join(__dirname, "package.json");

// Get path to dist folder
const distPath = path.join(__dirname, "dist");

try {
    const fileContent: string = fs.readFileSync(filePath, "utf-8");
    const pkg = JSON.parse(fileContent);
   // console.log("JSON Data:", pkg);

    const { name, version, description, author, license } = pkg;

    // Change directory to dist folder
    process.chdir(distPath);

    execSync("ls");

    console.log("name: ", name);

    // Run npm init -y to create a package.json file adding the name, version, description, author, and license from the original package.json file
    execSync(`npm init -y`);

    execSync(`npm pkg set name=${name} version=${version} description=${description}`);


} catch (error) {
    console.error("Error reading JSON file:", error);
}
