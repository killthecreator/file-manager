# File manager

The app is a file manager system built with native Node.js APIs

# Functionality

- Works using CLI
- Performs basic file operations (copy, move, delete, rename, etc.)
- Utilizes Streams API
- Gets information about the host machine operating system
- Performs hash calculations
- Compresses and decompresses files

To run the app you need to:

1. Clone this repository to your local machine;
2. Go to `file-manager` branch using `git checkout file-manager` command;
3. Run `npm run start -- --username=your_username` where `your_username` is an actual username you want to provide to the app.

# Commands description

**If you want to use pathes with spaces you need to wrap a path into double quoutation marks like this:
`cd "my complicated folder"`
For one-word pathes dobule quotations are not required.**

- Navigation & working directory:
    - `up`: Go upper from current directory;
    - `cd path_to_directory`: Go to dedicated folder from current directory (path_to_directory can be relative or absolute);
    - `ls`: Prints in console list of all files and folders in current directory. List contains:
        - files and folder names (for files - with extension);
        - folders and files are sorted in alphabetical order ascending, but list of folders goes first;
        - type of directory content is marked explicitly (e.g. as a corresponding column value).

- Basic operations with files:
    - `cat path_to_file`: Reads file and prints it's content in console;
    - `add new_file_name`: Creates empty file in current working directory (no exact path is required, just write a filename);
    - `rn path_to_file new_filename`: Renames file (for a new filename just provide a new name, no need to provide a path or extension);
    - `cp path_to_file path_to_new_directory`: Copies file from source path to destination directory;
    - `mv path_to_file path_to_new_directory`: Moves file from source path to destination directory;
    - `rm path_to_file`: Deletes file from provided path.

- Operating system info (prints following information in console):
    - `os --EOL`: Gets EOL (default system End-Of-Line) ;
    - `os --cpus`: Gets host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them);
    - `os --homedir`: Gets home directory;
    - `os --username`: Gets current system user name;
    - `os --architecture`: Gets CPU architecture for which Node.js binary has compiled.

- Hash calculation:
    - `hash path_to_file`: Calculates hash for file and prints it into console.

- Compress and decompress operations (`path_to_destination` is just a destination folder name, do not provide a filename here):
    - `compress path_to_file path_to_destination`: Compresses file using Brotli algorithm;
    - `decompress path_to_file path_to_destination`: Dempresses file using Brotli algorithm.
