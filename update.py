import subprocess,os,re

projects_and_packages = [
  ("simple-icons-builder", "simple-icons"),
  ("carbon-icons-builder", "@carbon/icons"),
  ("css-gg-builder", "css.gg"),
  ("feather-icons-builder", "feather-icons"),
  ("heroicons-builder", "heroicons"),
  ("lucide-icons-builder", "lucide-static"),
  ("material-design-icons-builder", "@material-design-icons/svg"),
  ("octicons-builder", "@primer/octicons"),
  ("phosphor-icons", "@phosphor-icons/core"),
  ("remix-icons-builder", "remixicon"),
  ("tabler-icons-builder", "@tabler/icons")
]

def update_readme(package, new_version):
  readme = os.path.join(original_dir, "README.md")
  with open(readme, "r") as file:
    lines = file.readlines()

  for i, line in enumerate(lines):
    if package in line and '|' in line:
      parts = line.split('|')
      parts[-2] = f" {new_version}".ljust(len(parts[-2]))
      lines[i] = '|'.join(parts)
      break

  with open(readme, "w") as file:
    file.writelines(lines)
  print(f"README.md updated for {package}.")

def update_package(folder, package):
  folder = os.path.join("packages", "builders", folder)
  try:
    os.chdir(folder)
    print(f"Updating {package} in {folder}")

    result = subprocess.run(["pnpm", "update", package], check=True, capture_output=True, text=True)

    with open("package.json", "r") as file:
      package_json = file.read()
      new_version = re.search(f'"{package}": "(.*?)"', package_json)
      if new_version:
        new_version = new_version.group(1).replace("^", "")
        print(f"Updated {package} to {new_version}")
        update_readme(package, new_version)

    print(f"Successfully updated {package} in {folder}")
  except subprocess.CalledProcessError as e:
    print(f"Error updating {package} in {folder}: {e}")
  except Exception as e:
    raise e
    print(f"An error occurred: {e}")
  finally:
    os.chdir(original_dir)

if __name__ == "__main__":
  original_dir = os.getcwd()
  for folder, package in projects_and_packages:
    update_package(folder, package)
