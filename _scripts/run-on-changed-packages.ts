import { execSync } from "child_process";

const diffChangedFiles = execSync("git diff --name-only HEAD^..HEAD", {
  encoding: "utf-8",
}).split("\n");

console.log("[diffChangedFiles]", diffChangedFiles);

// TODO: Como mapear o `diffChangedFiles` para `changedPackageNames`
const changedPackageNames = [
  // "company-front",
  // "company-server"
];

// const workspacesFlags = "--workspace=company-front --workspace=company-server";
const workspacesFlags = changedPackageNames.map((packageName) => {
  return `--workspace=${packageName}`
}).join(" ");

if(workspacesFlags) {
  const command = process.argv.at(-1);
  const commandToRun = `${command} ${workspacesFlags}`;
  execSync(commandToRun, {
    stdio: "inherit",
  });
} else {
  console.log("Nothing has changed!");
}