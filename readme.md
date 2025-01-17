# Task CLI

This is a simple command-line interface (CLI) application for managing tasks. You can add, update, delete, and list tasks, as well as mark them as done or in-progress.
Project url: "https://roadmap.sh/projects/task-tracker"

## Prerequisites

- Node.js (version 12 or higher)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/kenny7289/task-tracker.git
    cd <repository-directory>
    ```


## Usage

Run the CLI with the following commands:

### Add a Task
```sh
node task-cli.js add "Task description"
```

### Update a Task
```sh
node task-cli.js update <task-id> "New task description"
```

### Delete a Task
```sh
node task-cli.js delete <task-id>
```

### Mark a Task as In-Progress
```sh
node task-cli.js mark-in-progress <task-id>
```

### Mark a Task as Done
```sh
node task-cli.js mark-done <task-id>
```

### List All Tasks
```sh
node task-cli.js list
```

### List Done Tasks
```sh
node task-cli.js list done
```

### List To-Do Tasks
```sh
node task-cli.js list todo
```

### List In-Progress Tasks
```sh
node task-cli.js list in-progress
```

## Example

```sh
node task-cli.js add "Finish the project"
task-cli mark-done 1
task-cli mark-in-progress 1
node task-cli.js list
node task-cli.js list done
```
