# File Manager
## Description
- The program is started by npm-script `start` in following way:
```bash
npm run start -- --username=your_username
```
- At the start of the program and after each end of input/operation current working directory will be printed in following way:  
`You are currently in path_to_working_directory`
- In case of unknown operation or invalid input (missing mandatory arguments, wrong data in arguments, etc.) `Invalid input` message will be shown but you will be able to enter another command
- In case of error during execution of operation `Operation failed` message will be shown but you will be able to enter another command
- To finish the program you should press `ctrl + c` or input `.exit` command into console
`Thank you for using File Manager, Username, goodbye!`
## Сommands
- Navigation & working directory (nwd)
    - Go upper from current directory
    ```bash
    up
    ```
    - Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
    ```bash
    cd path_to_directory
    ```
    - Print in console list of all files and folders in current directory. List should contain:
        - list will contain files and folder names (for files - with extension)
        - folders and files are sorted in alphabetical order ascending, but list of folders goes first
        - type of directory content will be marked explicitly
    ```bash
    ls
    ```
- Basic operations with files
    - Read file and print it's content in console (File path can be relative or absolute): 
    ```bash
    cat path_to_file
    ```
    - Create empty file in current working directory (New filename should be written like `filename.ext` without the path to it): 
    ```bash
    add new_file_name
    ```
    - Rename file (File path should be relative. New filename should be written like `filename.ext` without the path to it): 
    ```bash
    rn path_to_file new_filename
    ```
    - Copy file: (File and new directory pathes should be relative)
    ```bash
    cp path_to_file path_to_new_directory
    ```
    - Move file: (File and new directory pathes should be relative)
    ```bash
    mv path_to_file path_to_new_directory
    ```
    - Delete file (File path should be relative)
    ```bash
    rm path_to_file
    ```
- Operating system info (prints following information in console)
    - Get EOL (default system End-Of-Line) 
    ```bash
    os --EOL
    ```
    - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
    ```bash
    os --cpus
    ```
    - Get home directory
    ```bash
    os --homedir
    ```
    - Get current *system user name* (Do not confuse with the username that is set when the application starts)
    ```bash
    os --username
    ```
    - Get CPU architecture for which Node.js binary has compiled 
    ```bash
    os --architecture
    ```
- Hash calculation  
    - Calculate hash for file and print it into console (File path can be relative or absolute)
    ```bash
    hash path_to_file
    ```
- Compress and decompress operations  
    - Compress file using Brotli algorithm (Both pathes should be relative. File to compress (in second argument) should be written like `filename.br`)
    ```bash
    compress path_to_file path_to_destination
    ```
    - Decompress file using Brotli algorithm (Both pathes should be relative. File to decompress (in first argument) should be written like `filename.ext.br`)
    ```bash
    decompress path_to_file path_to_destination