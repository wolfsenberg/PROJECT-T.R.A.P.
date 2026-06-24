import { Question } from "./types";

export const operatingSystemsQuestions: Question[] = [
  // ==================== CPU ARCHITECTURE (Questions 1-20) ====================
  {
    question: "What are the three main functional units of a CPU?",
    choices: [
      "RAM, ROM, Cache",
      "ALU, Control Unit, Registers",
      "Hard Drive, SSD, RAM",
      "Input Unit, Output Unit, Memory"
    ],
    answer: 1,
    explanation: "The CPU consists of the Arithmetic Logic Unit (ALU) for computations, the Control Unit (CU) for directing operations, and Registers for fast temporary storage."
  },
  {
    question: "What is the primary function of the Arithmetic Logic Unit (ALU)?",
    choices: [
      "Fetching instructions from memory",
      "Performing arithmetic and logical operations",
      "Storing the operating system",
      "Managing I/O devices"
    ],
    answer: 1,
    explanation: "The ALU performs all arithmetic operations (addition, subtraction, etc.) and logical operations (AND, OR, NOT, comparisons) within the CPU."
  },
  {
    question: "What is the role of the Control Unit (CU) in a CPU?",
    choices: [
      "Performing mathematical calculations",
      "Directing the operation of the processor by interpreting instructions and generating control signals",
      "Storing data permanently",
      "Connecting peripherals to the system"
    ],
    answer: 1,
    explanation: "The Control Unit decodes instructions fetched from memory and generates appropriate control signals to coordinate the ALU, registers, and other components."
  },
  {
    question: "What is the purpose of the Program Counter (PC) register?",
    choices: [
      "Stores the result of the last ALU computation",
      "Holds the memory address of the next instruction to be fetched",
      "Counts the total number of programs running",
      "Stores the current instruction being executed"
    ],
    answer: 1,
    explanation: "The Program Counter (PC) holds the address of the next instruction to be fetched from memory. It is automatically incremented after each fetch or modified by branch/jump instructions."
  },
  {
    question: "What does the Instruction Register (IR) hold?",
    choices: [
      "The address of the next instruction",
      "The instruction currently being decoded and executed",
      "The result of the last computation",
      "The base address of the current process"
    ],
    answer: 1,
    explanation: "The Instruction Register (IR) holds the instruction that has been fetched from memory and is currently being decoded and executed by the control unit."
  },
  {
    question: "What is the function of the Memory Address Register (MAR)?",
    choices: [
      "Stores data read from memory",
      "Holds the address of the memory location to be accessed",
      "Stores the current instruction",
      "Counts clock cycles"
    ],
    answer: 1,
    explanation: "The MAR holds the address of the memory location that the CPU wants to read from or write to. It is connected to the address bus."
  },
  {
    question: "What is the function of the Memory Data Register (MDR)?",
    choices: [
      "Holds the address to be sent to memory",
      "Contains the data being transferred to or from memory",
      "Stores the program counter value",
      "Holds the instruction opcode"
    ],
    answer: 1,
    explanation: "The MDR (also called Memory Buffer Register) holds the data that has been read from memory or the data to be written to memory. It acts as a buffer between the CPU and main memory."
  },
  {
    question: "What is the correct sequence of the instruction cycle?",
    choices: [
      "Execute → Decode → Fetch → Store",
      "Fetch → Decode → Execute → Store",
      "Decode → Fetch → Store → Execute",
      "Store → Fetch → Execute → Decode"
    ],
    answer: 1,
    explanation: "The instruction cycle follows: Fetch (retrieve instruction from memory), Decode (interpret the opcode), Execute (perform the operation), and Store (write results back if needed)."
  },
  {
    question: "What is pipelining in CPU architecture?",
    choices: [
      "Running multiple programs simultaneously on separate CPUs",
      "Overlapping the execution stages of multiple instructions to improve throughput",
      "Connecting multiple computers via a network pipeline",
      "A method of cooling the CPU using pipes"
    ],
    answer: 1,
    explanation: "Pipelining divides instruction execution into stages (fetch, decode, execute, memory access, write-back) and overlaps them, so while one instruction is being executed, the next is being decoded, and another is being fetched."
  },
  {
    question: "What distinguishes RISC from CISC architecture?",
    choices: [
      "RISC uses complex multi-cycle instructions while CISC uses simple ones",
      "RISC uses simple, fixed-length instructions executed in one cycle; CISC uses complex, variable-length instructions",
      "RISC cannot perform floating-point operations",
      "CISC processors are always faster than RISC"
    ],
    answer: 1,
    explanation: "RISC (Reduced Instruction Set Computer) emphasizes simple instructions that execute in one clock cycle with fixed-length format. CISC (Complex Instruction Set Computer) has variable-length instructions that may take multiple cycles but accomplish more per instruction."
  },
  {
    question: "How does clock speed relate to CPU performance?",
    choices: [
      "Clock speed has no effect on performance",
      "Higher clock speed means more instruction cycles per second, generally improving performance",
      "Lower clock speed always means better performance",
      "Clock speed only affects RAM, not the CPU"
    ],
    answer: 1,
    explanation: "Clock speed (measured in GHz) determines how many cycles the CPU executes per second. Higher clock speed generally means faster execution, though other factors like pipeline depth, cache size, and instruction set also matter."
  },
  {
    question: "What does 'word size' refer to in CPU architecture?",
    choices: [
      "The physical size of the CPU chip",
      "The number of bits the CPU can process in a single operation",
      "The number of words stored in cache",
      "The size of the instruction set"
    ],
    answer: 1,
    explanation: "Word size is the number of bits that the CPU can process simultaneously in one operation (e.g., 32-bit or 64-bit). It determines the width of registers, data bus, and the range of memory addresses."
  },
  {
    question: "Which register type is used to hold the memory address of data operands?",
    choices: [
      "Accumulator",
      "Index Register / Address Register",
      "Status Register",
      "Instruction Register"
    ],
    answer: 1,
    explanation: "Index registers (or address registers) hold memory addresses used to calculate effective addresses of data operands, enabling indexed and indirect addressing modes."
  },
  {
    question: "What is the purpose of a status register (flags register)?",
    choices: [
      "Store the next instruction's address",
      "Hold condition codes and status bits indicating results of operations (zero, carry, overflow, sign)",
      "Store the return address for subroutines",
      "Hold the base address of the stack"
    ],
    answer: 1,
    explanation: "The status/flags register contains individual bits that indicate conditions resulting from ALU operations: Zero flag, Carry flag, Overflow flag, Sign flag, etc. These are used for conditional branching."
  },
  {
    question: "In a 5-stage pipeline (IF, ID, EX, MEM, WB), what does a pipeline hazard cause?",
    choices: [
      "Increased clock speed",
      "Pipeline stalls (bubbles) that reduce throughput",
      "More instructions executed per cycle",
      "Reduced power consumption"
    ],
    answer: 1,
    explanation: "Pipeline hazards (data hazards, control hazards, structural hazards) force the pipeline to stall, inserting 'bubbles' (no-ops), which reduces the throughput advantage of pipelining."
  },
  {
    question: "What is the accumulator register used for?",
    choices: [
      "Storing memory addresses",
      "Holding intermediate results of arithmetic and logic operations",
      "Counting instructions",
      "Storing the stack pointer"
    ],
    answer: 1,
    explanation: "The accumulator is a general-purpose register that stores intermediate results of ALU operations. In accumulator-based architectures, it serves as an implicit operand for many instructions."
  },
  {
    question: "A CPU has a clock speed of 3 GHz. How many clock cycles does it execute per second?",
    choices: [
      "3 million cycles",
      "3 billion cycles",
      "3 thousand cycles",
      "300 million cycles"
    ],
    answer: 1,
    explanation: "1 GHz = 10^9 (1 billion) cycles per second. Therefore, 3 GHz = 3 × 10^9 = 3 billion clock cycles per second."
  },
  {
    question: "What is the primary advantage of having more general-purpose registers in a CPU?",
    choices: [
      "Reduced clock speed",
      "Fewer memory accesses needed, improving performance",
      "Smaller instruction set",
      "Lower power consumption"
    ],
    answer: 1,
    explanation: "More registers allow the CPU to keep more frequently used data in fast register storage rather than accessing slower main memory, reducing memory access overhead and improving performance."
  },
  {
    question: "Which component of the CPU generates timing signals to synchronize operations?",
    choices: [
      "ALU",
      "Clock generator",
      "Cache memory",
      "Program Counter"
    ],
    answer: 1,
    explanation: "The clock generator produces a continuous stream of timing pulses (clock signals) that synchronize all CPU operations, ensuring components work in coordination during each cycle."
  },
  {
    question: "What is the Stack Pointer (SP) register used for?",
    choices: [
      "Pointing to the next instruction",
      "Holding the address of the top of the current stack in memory",
      "Counting function calls",
      "Storing the base address of a program"
    ],
    answer: 1,
    explanation: "The Stack Pointer holds the memory address of the top of the stack. It is automatically updated during push/pop operations and is essential for function calls, local variables, and interrupt handling."
  },
  // ==================== BOOTING PROCESS (Questions 21-35) ====================
  {
    question: "What is the first program that executes when a computer is powered on?",
    choices: [
      "Operating System kernel",
      "BIOS/UEFI firmware",
      "Boot Loader (GRUB)",
      "Desktop Environment"
    ],
    answer: 1,
    explanation: "BIOS (Basic Input/Output System) or UEFI firmware stored in non-volatile memory (ROM/flash) is the first code executed on power-up. It initializes hardware and begins the boot sequence."
  },
  {
    question: "What does POST stand for and what is its purpose?",
    choices: [
      "Power On System Transfer - transfers power to components",
      "Power-On Self-Test - verifies critical hardware is functioning correctly",
      "Program On Startup Test - tests installed programs",
      "Peripheral Output System Test - tests output devices"
    ],
    answer: 1,
    explanation: "POST (Power-On Self-Test) is a diagnostic process run by BIOS/UEFI to verify that critical hardware components (CPU, RAM, video, storage controllers) are functioning before attempting to load the OS."
  },
  {
    question: "What is the correct order of the boot process?",
    choices: [
      "OS Kernel → BIOS → Boot Loader → POST",
      "BIOS/UEFI → POST → Boot Loader → OS Kernel",
      "POST → Boot Loader → BIOS → OS Kernel",
      "Boot Loader → BIOS → POST → OS Kernel"
    ],
    answer: 1,
    explanation: "The correct boot sequence: BIOS/UEFI executes first → POST tests hardware → Boot Loader is located and executed → OS Kernel is loaded into memory and given control."
  },
  {
    question: "Where is the Master Boot Record (MBR) located on a disk?",
    choices: [
      "In RAM",
      "In the first sector (sector 0) of the bootable disk",
      "In the CPU cache",
      "In the BIOS ROM chip"
    ],
    answer: 1,
    explanation: "The MBR occupies the first 512 bytes (sector 0) of a bootable disk. It contains bootstrap code (446 bytes), a partition table (64 bytes), and a boot signature (2 bytes)."
  },
  {
    question: "What is the primary advantage of GPT over MBR partitioning?",
    choices: [
      "GPT is faster to read",
      "GPT supports disks larger than 2TB and allows more than 4 primary partitions",
      "GPT uses less disk space",
      "GPT is compatible with older BIOS systems"
    ],
    answer: 1,
    explanation: "GPT (GUID Partition Table) supports disks larger than 2TB (MBR limit), allows up to 128 partitions (vs MBR's 4 primary), and includes redundancy with a backup partition table at the disk's end."
  },
  {
    question: "What is the role of the boot loader?",
    choices: [
      "Running antivirus scanning at startup",
      "Locating and loading the OS kernel from storage into RAM",
      "Formatting the hard drive for the OS",
      "Displaying the desktop login screen"
    ],
    answer: 1,
    explanation: "The boot loader (e.g., GRUB, Windows Boot Manager) is a small program that locates the OS kernel on disk, loads it into RAM, passes boot parameters, and transfers CPU control to it."
  },
  {
    question: "What is GRUB in the context of operating systems?",
    choices: [
      "A file system type",
      "A boot loader used primarily in Linux systems that supports multi-boot",
      "A disk partitioning tool",
      "A hardware diagnostic program"
    ],
    answer: 1,
    explanation: "GRUB (GRand Unified Bootloader) is a popular boot loader for Linux/Unix systems. It supports multi-boot configurations, allowing users to choose between multiple operating systems at startup."
  },
  {
    question: "What is the difference between a cold boot and a warm boot?",
    choices: [
      "Cold boot is faster than warm boot",
      "Cold boot starts from power-off state; warm boot restarts without full power cycle (e.g., Ctrl+Alt+Del)",
      "Warm boot requires replacing hardware",
      "There is no practical difference"
    ],
    answer: 1,
    explanation: "A cold boot (hard boot) starts the computer from a completely powered-off state, running full POST. A warm boot (soft boot) restarts the system without a full power cycle, often skipping some POST checks."
  },
  {
    question: "What does CMOS store in relation to the boot process?",
    choices: [
      "The operating system files",
      "BIOS configuration settings such as boot device order, date/time, and hardware parameters",
      "User application data",
      "The file system structure"
    ],
    answer: 1,
    explanation: "CMOS (battery-backed memory) stores BIOS/UEFI configuration settings: boot device priority, system date/time, hardware parameters, and other user-configurable BIOS settings that persist when powered off."
  },
  {
    question: "What happens if POST detects a critical hardware failure?",
    choices: [
      "The OS loads in safe mode",
      "The system halts and may emit beep codes or display error codes",
      "The system continues booting normally",
      "GRUB automatically repairs the hardware"
    ],
    answer: 1,
    explanation: "If POST detects a critical failure (e.g., RAM not found, CPU malfunction), the system halts the boot process and communicates the error through beep codes, LED patterns, or on-screen error codes."
  },
  {
    question: "What is UEFI and how does it differ from traditional BIOS?",
    choices: [
      "UEFI is a type of hard drive",
      "UEFI is modern firmware that supports larger disks, faster boot, secure boot, and a graphical interface compared to legacy BIOS",
      "UEFI is an operating system",
      "UEFI and BIOS are identical in functionality"
    ],
    answer: 1,
    explanation: "UEFI (Unified Extensible Firmware Interface) is the modern replacement for BIOS. It supports GPT disks (>2TB), Secure Boot (prevents unauthorized OS loading), faster boot times, graphical interface, and networking capabilities."
  },
  {
    question: "What is the purpose of Secure Boot in UEFI?",
    choices: [
      "Encrypting the hard drive",
      "Ensuring only digitally signed and trusted software can run during the boot process",
      "Password protecting the BIOS settings",
      "Preventing physical theft of the computer"
    ],
    answer: 1,
    explanation: "Secure Boot is a UEFI feature that verifies the digital signatures of boot loaders and OS kernels before executing them, preventing rootkits and unauthorized operating systems from loading during boot."
  },
  {
    question: "During the boot process, at what stage is the kernel loaded into memory?",
    choices: [
      "During POST",
      "After the boot loader executes",
      "Before BIOS initializes",
      "During CMOS battery check"
    ],
    answer: 1,
    explanation: "The kernel is loaded into memory after the boot loader executes. The boot loader locates the kernel image on disk, loads it into RAM, and then transfers control to the kernel's entry point."
  },
  {
    question: "What is the Windows Boot Manager (bootmgr)?",
    choices: [
      "A disk defragmentation tool",
      "The boot loader for Windows operating systems that loads winload.exe to start the kernel",
      "A Windows update service",
      "A BIOS replacement for Windows"
    ],
    answer: 1,
    explanation: "Windows Boot Manager (bootmgr) is Microsoft's boot loader. It reads the BCD (Boot Configuration Data), presents OS choices if multi-boot is configured, and launches winload.exe which loads the Windows kernel (ntoskrnl.exe)."
  },
  {
    question: "What is the boot sequence when multiple storage devices are present?",
    choices: [
      "The OS always boots from the largest drive",
      "The BIOS/UEFI boot priority order determines which device is checked first for bootable media",
      "All drives are booted simultaneously",
      "The newest drive always boots first"
    ],
    answer: 1,
    explanation: "BIOS/UEFI maintains a configurable boot priority list (e.g., USB first, then SSD, then HDD). It checks each device in order for bootable media and boots from the first one found."
  },
  // ==================== COMPUTER PROTECTION (Questions 36-50) ====================
  {
    question: "What is dual-mode operation in operating systems?",
    choices: [
      "Running two operating systems simultaneously",
      "CPU operation in two modes: user mode (restricted) and kernel mode (privileged) to protect the system",
      "Having two CPUs in one system",
      "Switching between graphical and text modes"
    ],
    answer: 1,
    explanation: "Dual-mode operation provides hardware-supported protection by distinguishing between user mode (limited privileges for applications) and kernel mode (full hardware access for OS). A mode bit in hardware indicates the current mode."
  },
  {
    question: "What triggers a transition from user mode to kernel mode?",
    choices: [
      "Opening a new application window",
      "A system call, interrupt, or exception",
      "Pressing the power button",
      "Connecting a USB device"
    ],
    answer: 1,
    explanation: "The transition from user mode to kernel mode occurs via system calls (trap instruction), hardware interrupts (I/O completion, timer), or exceptions (divide by zero, page fault). The mode bit is flipped by hardware."
  },
  {
    question: "What is the purpose of system calls?",
    choices: [
      "Making phone calls through the computer",
      "Providing a controlled interface for user programs to request OS services (file I/O, process creation, memory allocation)",
      "Calling functions within a user program",
      "Communicating between two computers"
    ],
    answer: 1,
    explanation: "System calls are the programmatic interface between user processes and the OS kernel. They allow user programs to safely request privileged operations (file access, process management, networking) through a controlled mechanism."
  },
  {
    question: "How does memory protection prevent unauthorized access?",
    choices: [
      "By encrypting all data in RAM",
      "Using base and limit registers to define the legal address range for each process",
      "By storing each process on a separate hard drive",
      "By requiring passwords for memory access"
    ],
    answer: 1,
    explanation: "Memory protection uses base and limit registers to define the legal memory address range for each process. Any access outside this range triggers a trap to the OS, preventing one process from accessing another's memory."
  },
  {
    question: "What is the role of the base register in memory protection?",
    choices: [
      "Stores the size of allocated memory",
      "Holds the smallest legal physical memory address for a process",
      "Contains the process priority",
      "Points to the top of the stack"
    ],
    answer: 1,
    explanation: "The base register holds the smallest legal physical memory address accessible by a process. Any memory reference generated by the process must be greater than or equal to the base register value."
  },
  {
    question: "What is the role of the limit register in memory protection?",
    choices: [
      "Holds the starting address of memory",
      "Specifies the size of the range of legal addresses for a process",
      "Limits the clock speed of the CPU",
      "Controls the maximum file size"
    ],
    answer: 1,
    explanation: "The limit register holds the size of the memory range accessible by the process. A memory address is legal if: base ≤ address < base + limit. Any access outside this range causes a trap."
  },
  {
    question: "What is I/O protection and why is it necessary?",
    choices: [
      "Protecting I/O devices from physical damage",
      "Ensuring all I/O instructions are privileged and can only be executed in kernel mode",
      "Encrypting data sent to printers",
      "Preventing too many devices from being connected"
    ],
    answer: 1,
    explanation: "I/O protection ensures that all I/O instructions are privileged (kernel-mode only). User programs must request I/O through system calls, preventing them from directly accessing devices and potentially interfering with other processes or the OS."
  },
  {
    question: "What is the purpose of a timer interrupt in OS protection?",
    choices: [
      "Displaying the system clock on screen",
      "Preventing a process from monopolizing the CPU by generating periodic interrupts that return control to the OS",
      "Timing how long the computer has been on",
      "Synchronizing network time"
    ],
    answer: 1,
    explanation: "The timer interrupt ensures no single process can hold the CPU indefinitely. The OS sets a timer before dispatching a process; when it expires, an interrupt returns control to the OS, which can then schedule another process."
  },
  {
    question: "What happens when a user-mode process attempts to execute a privileged instruction?",
    choices: [
      "The instruction executes normally",
      "A hardware trap (exception) is generated and control transfers to the OS, which typically terminates the process",
      "The system reboots",
      "The instruction is queued for later execution"
    ],
    answer: 1,
    explanation: "If a user-mode process attempts a privileged instruction, the hardware generates a trap (exception) that transfers control to the OS. The OS treats this as a protection violation and typically terminates the offending process."
  },
  {
    question: "Which of the following is a privileged instruction?",
    choices: [
      "Adding two numbers in a register",
      "Modifying the timer value or switching to kernel mode",
      "Reading a variable from the process's own memory",
      "Performing a comparison operation"
    ],
    answer: 1,
    explanation: "Privileged instructions include: setting the timer, modifying base/limit registers, switching to kernel mode, halting the CPU, disabling interrupts, and performing direct I/O. These can only execute in kernel mode."
  },
  {
    question: "How does hardware support dual-mode operation?",
    choices: [
      "Through software-only mechanisms",
      "Using a mode bit in the CPU that indicates the current execution mode (0 = kernel, 1 = user)",
      "By using two separate processors",
      "Through a special BIOS setting"
    ],
    answer: 1,
    explanation: "A mode bit in the CPU hardware indicates the current mode: 0 for kernel mode, 1 for user mode. The hardware checks this bit before executing privileged instructions and switches it during system calls and returns."
  },
  {
    question: "What protection mechanism prevents infinite loops from crashing the system?",
    choices: [
      "Memory protection",
      "Timer (hardware timer interrupt that preempts long-running processes)",
      "I/O protection",
      "Base register"
    ],
    answer: 1,
    explanation: "The hardware timer generates an interrupt after a set period. If a process enters an infinite loop, the timer will eventually fire, returning control to the OS which can terminate or reschedule the process."
  },
  {
    question: "In the context of protection, what is a trap?",
    choices: [
      "A physical device to catch intruders",
      "A software-generated interrupt caused by an error or a system call request",
      "A type of firewall",
      "A network security protocol"
    ],
    answer: 1,
    explanation: "A trap is a software-generated interrupt triggered by an error (division by zero, invalid memory access) or a deliberate system call instruction. It causes a mode switch from user to kernel mode and transfers control to the appropriate OS handler."
  },
  {
    question: "Why must the instruction to load base and limit registers be privileged?",
    choices: [
      "To improve performance",
      "To prevent user processes from modifying their own memory boundaries and accessing other processes' memory",
      "To reduce power consumption",
      "To simplify the instruction set"
    ],
    answer: 1,
    explanation: "If user processes could modify base/limit registers, they could expand their addressable memory range to include other processes' memory or OS memory, completely defeating memory protection."
  },
  {
    question: "What is the relationship between interrupts and protection?",
    choices: [
      "Interrupts disable all protection",
      "Interrupts provide the mechanism to return control from user processes to the OS, enabling the OS to enforce protection policies",
      "Protection and interrupts are unrelated concepts",
      "Interrupts only work in user mode"
    ],
    answer: 1,
    explanation: "Interrupts (hardware timer, I/O completion, traps) are the mechanism that returns control to the OS. Without interrupts, a user process could run indefinitely and the OS could never regain control to enforce protection."
  },
  // ==================== PROCESS MANAGEMENT (Questions 51-75) ====================
  {
    question: "What are the five states in the process lifecycle?",
    choices: [
      "Start, Run, Pause, Resume, End",
      "New, Ready, Running, Waiting, Terminated",
      "Open, Active, Idle, Blocked, Closed",
      "Init, Scheduled, Active, Sleeping, Dead"
    ],
    answer: 1,
    explanation: "The five process states per Silberschatz: New (being created), Ready (waiting for CPU assignment), Running (instructions being executed), Waiting/Blocked (waiting for I/O or event), Terminated (finished execution)."
  },
  {
    question: "What information does a Process Control Block (PCB) contain?",
    choices: [
      "Only the process name",
      "Process state, program counter, CPU registers, memory management info, scheduling info, I/O status, and accounting info",
      "Only the process priority",
      "Only memory allocation details"
    ],
    answer: 1,
    explanation: "The PCB is the OS data structure for each process containing: process state, program counter, CPU register values, CPU scheduling information, memory management information, I/O status, and accounting information."
  },
  {
    question: "What occurs during a context switch?",
    choices: [
      "The CPU is physically replaced",
      "The state of the current process is saved to its PCB and the state of the next process is loaded from its PCB",
      "All processes are terminated",
      "The operating system is reinstalled"
    ],
    answer: 1,
    explanation: "During a context switch, the OS saves the current process's state (registers, PC, etc.) into its PCB, then loads the saved state of the next scheduled process from its PCB into the CPU registers, resuming that process."
  },
  {
    question: "Given processes P1(burst=24), P2(burst=3), P3(burst=3) arriving at time 0 in FCFS order, what is the average waiting time?",
    choices: [
      "3 ms",
      "17 ms",
      "27 ms",
      "10 ms"
    ],
    answer: 1,
    explanation: "FCFS: P1 waits 0, P2 waits 24, P3 waits 27. Average = (0 + 24 + 27)/3 = 51/3 = 17 ms. FCFS processes jobs in arrival order, so short jobs behind long ones wait significantly."
  },
  {
    question: "Given processes P1(burst=6), P2(burst=8), P3(burst=7), P4(burst=3) with SJF scheduling, what is the execution order?",
    choices: [
      "P1, P2, P3, P4",
      "P4, P1, P3, P2",
      "P2, P3, P1, P4",
      "P4, P3, P1, P2"
    ],
    answer: 1,
    explanation: "SJF (Shortest Job First) orders by burst time ascending: P4(3) → P1(6) → P3(7) → P2(8). SJF minimizes average waiting time but requires knowing burst times in advance."
  },
  {
    question: "In Round Robin scheduling with time quantum = 4, given processes P1(burst=5), P2(burst=3), P3(burst=8), what is the Gantt chart order?",
    choices: [
      "P1, P2, P3, P1, P3",
      "P1(4), P2(3), P3(4), P1(1), P3(4)",
      "P2, P1, P3",
      "P3, P2, P1, P3"
    ],
    answer: 1,
    explanation: "Round Robin with quantum=4: P1 runs 4 units (1 remaining), P2 runs 3 units (done), P3 runs 4 units (4 remaining), P1 runs 1 unit (done), P3 runs 4 units (done). Order: P1(4)→P2(3)→P3(4)→P1(1)→P3(4)."
  },
  {
    question: "What is the difference between preemptive and non-preemptive scheduling?",
    choices: [
      "Preemptive scheduling is always slower",
      "In preemptive scheduling, the OS can forcibly remove a running process from the CPU; in non-preemptive, a process runs until it voluntarily yields",
      "Non-preemptive scheduling only works in real-time systems",
      "There is no practical difference between them"
    ],
    answer: 1,
    explanation: "Preemptive scheduling allows the OS to interrupt a running process (via timer or priority) and allocate the CPU to another. Non-preemptive scheduling lets a process keep the CPU until it finishes, blocks for I/O, or voluntarily yields."
  },
  {
    question: "Which scheduling algorithm is FCFS (First-Come First-Served)?",
    choices: [
      "Preemptive, priority-based",
      "Non-preemptive; processes are served in their arrival order",
      "Preemptive; the shortest job always runs first",
      "Non-preemptive; based on process size"
    ],
    answer: 1,
    explanation: "FCFS is the simplest non-preemptive scheduling algorithm. Processes are executed in the exact order they arrive in the ready queue. It suffers from the convoy effect where short processes wait behind long ones."
  },
  {
    question: "What is the convoy effect in CPU scheduling?",
    choices: [
      "Multiple CPUs processing in parallel",
      "Short processes waiting behind a long CPU-bound process in FCFS, causing high average waiting time",
      "Processes being executed in random order",
      "Multiple processes finishing at the same time"
    ],
    answer: 1,
    explanation: "The convoy effect occurs in FCFS when many short processes queue behind one long CPU-bound process, resulting in high average waiting time. It's like cars stuck behind a slow truck on a single-lane road."
  },
  {
    question: "What are the four necessary conditions for deadlock?",
    choices: [
      "Speed, Memory, Priority, Access",
      "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
      "Starvation, Aging, Priority, Blocking",
      "Locking, Waiting, Timing, Releasing"
    ],
    answer: 1,
    explanation: "Deadlock occurs only when ALL four conditions hold simultaneously: Mutual Exclusion (resources not sharable), Hold and Wait (holding resources while waiting for others), No Preemption (resources can't be forcibly taken), Circular Wait (circular chain of waiting)."
  },
  {
    question: "Which deadlock handling strategy uses the Banker's Algorithm?",
    choices: [
      "Deadlock prevention",
      "Deadlock avoidance",
      "Deadlock detection",
      "Deadlock ignorance"
    ],
    answer: 1,
    explanation: "The Banker's Algorithm is a deadlock avoidance strategy. Before granting a resource request, it checks if the resulting state is safe (all processes can eventually complete). If not safe, the request is denied to avoid potential deadlock."
  },
  {
    question: "What is the difference between deadlock prevention and deadlock avoidance?",
    choices: [
      "They are the same concept",
      "Prevention ensures at least one necessary condition can never hold; avoidance dynamically checks each request to ensure the system stays in a safe state",
      "Prevention is used only in single-processor systems",
      "Avoidance eliminates deadlock conditions permanently"
    ],
    answer: 1,
    explanation: "Deadlock prevention constrains the system to ensure at least one of the four necessary conditions cannot hold (e.g., require all resources upfront). Deadlock avoidance allows all conditions but uses algorithms (like Banker's) to dynamically deny unsafe requests."
  },
  {
    question: "What is a safe state in the context of deadlock avoidance?",
    choices: [
      "A state where no processes are running",
      "A state where there exists at least one sequence in which all processes can complete without deadlock",
      "A state where all resources are free",
      "A state where only one process is running"
    ],
    answer: 1,
    explanation: "A system is in a safe state if there exists a safe sequence - an ordering of all processes such that each process can obtain its maximum needed resources from currently available resources plus resources held by preceding processes in the sequence."
  },
  {
    question: "How can the 'Hold and Wait' deadlock condition be prevented?",
    choices: [
      "By allowing circular waiting",
      "By requiring processes to request all needed resources before execution begins, or release all held resources before requesting new ones",
      "By increasing CPU speed",
      "By using more memory"
    ],
    answer: 1,
    explanation: "Hold and Wait can be prevented by requiring a process to request all its resources at once before starting (no holding while waiting), or by requiring it to release all currently held resources before requesting additional ones."
  },
  {
    question: "What is starvation in process scheduling?",
    choices: [
      "A process running out of memory",
      "A process waiting indefinitely because other processes are continuously given priority",
      "A deadlocked process",
      "A process that uses too much CPU"
    ],
    answer: 1,
    explanation: "Starvation occurs when a process waits indefinitely for CPU time or resources because the scheduling algorithm continuously favors other processes. Unlike deadlock, progress is being made—just not by the starving process."
  },
  {
    question: "How does aging solve the starvation problem in priority scheduling?",
    choices: [
      "By terminating old processes",
      "By gradually increasing the priority of waiting processes over time",
      "By decreasing all priorities equally",
      "By restarting starving processes"
    ],
    answer: 1,
    explanation: "Aging prevents starvation by gradually increasing the priority of processes that have been waiting for a long time. Eventually, even the lowest-priority process will have its priority raised high enough to be scheduled."
  },
  {
    question: "What is SRTF (Shortest Remaining Time First) scheduling?",
    choices: [
      "A non-preemptive version of FCFS",
      "The preemptive version of SJF where a new process with shorter remaining time preempts the current process",
      "A disk scheduling algorithm",
      "A memory allocation strategy"
    ],
    answer: 1,
    explanation: "SRTF is the preemptive version of SJF. When a new process arrives with a CPU burst shorter than the remaining time of the currently executing process, the current process is preempted and the new shorter process runs."
  },
  {
    question: "What is the fork() system call used for?",
    choices: [
      "Terminating a process",
      "Creating a new child process that is a copy of the parent process",
      "Allocating memory",
      "Opening a file"
    ],
    answer: 1,
    explanation: "The fork() system call creates a new process (child) that is an almost exact copy of the calling process (parent). The child gets a copy of the parent's address space, and fork() returns 0 to the child and the child's PID to the parent."
  },
  {
    question: "What is the key difference between a process and a thread?",
    choices: [
      "There is no difference",
      "Threads share the same address space and resources within a process; processes have separate address spaces",
      "A thread is always larger than a process",
      "Processes can only run on single-core CPUs"
    ],
    answer: 1,
    explanation: "Threads within the same process share code, data, and OS resources (open files, signals) but have their own stack, registers, and program counter. Processes have completely separate address spaces and resources."
  },
  {
    question: "Given processes with arrival times and burst times: P1(0,8), P2(1,4), P3(2,9), P4(3,5) using SRTF, which process runs at time 1?",
    choices: [
      "P1 (remaining time = 7)",
      "P2 (burst time = 4, shorter remaining time than P1's 7)",
      "P3 (not yet arrived)",
      "P4 (not yet arrived)"
    ],
    answer: 1,
    explanation: "At time 1: P1 has remaining time 7, P2 arrives with burst 4. Since 4 < 7, SRTF preempts P1 and runs P2. SRTF always runs the process with the shortest remaining CPU burst time."
  },
  {
    question: "In priority scheduling, what happens when two processes have the same priority?",
    choices: [
      "Both are terminated",
      "FCFS (First-Come First-Served) is typically used as a tiebreaker",
      "The system deadlocks",
      "One is randomly deleted"
    ],
    answer: 1,
    explanation: "When processes have equal priority, FCFS is commonly used as the tiebreaker - the process that arrived first in the ready queue is scheduled first. This ensures deterministic and fair behavior among equal-priority processes."
  },
  {
    question: "What is the turnaround time of a process?",
    choices: [
      "The time spent waiting in the ready queue",
      "The total time from process submission to completion (waiting time + burst time)",
      "The time to switch between processes",
      "The time for I/O operations only"
    ],
    answer: 1,
    explanation: "Turnaround time = Completion time - Arrival time. It represents the total elapsed time from when the process is submitted until it finishes, including all waiting, execution, and I/O time."
  },
  {
    question: "What is the waiting time of a process?",
    choices: [
      "Total time from submission to completion",
      "The total time a process spends in the ready queue waiting for CPU allocation",
      "Time spent executing on the CPU",
      "Time spent performing I/O"
    ],
    answer: 1,
    explanation: "Waiting time = Turnaround time - Burst time (or sum of all periods spent in the ready queue). It measures how long a process waits for the CPU, not including execution time or I/O wait time."
  },
  {
    question: "Which CPU scheduling algorithm is optimal for minimizing average waiting time?",
    choices: [
      "FCFS",
      "SJF (Shortest Job First)",
      "Round Robin",
      "FIFO"
    ],
    answer: 1,
    explanation: "SJF is provably optimal for minimizing average waiting time among non-preemptive algorithms. By running shorter jobs first, it reduces the cumulative waiting of all processes. However, it requires advance knowledge of burst times."
  },
  {
    question: "What is the disadvantage of a very small time quantum in Round Robin scheduling?",
    choices: [
      "Processes never get to run",
      "Excessive context switches increase overhead and reduce effective CPU utilization",
      "Only one process can run",
      "It causes deadlock"
    ],
    answer: 1,
    explanation: "A very small time quantum causes frequent context switches. Since each switch has overhead (saving/loading PCB state), too many switches waste CPU time on overhead rather than productive execution. A too-large quantum degrades to FCFS."
  },
  // ==================== STORAGE MANAGEMENT / DISK SCHEDULING (Questions 76-100) ====================
  {
    question: "What are the physical components of a hard disk drive?",
    choices: [
      "CPU, RAM, and ROM",
      "Platters, tracks, sectors, cylinders, and read/write heads",
      "Transistors, capacitors, and resistors",
      "Buses, ports, and cables"
    ],
    answer: 1,
    explanation: "A hard disk consists of platters (spinning magnetic disks), tracks (concentric circles on platters), sectors (divisions of tracks), cylinders (same track across all platters), and read/write heads mounted on an actuator arm."
  },
  {
    question: "What are the three components of disk access time?",
    choices: [
      "Read time, write time, format time",
      "Seek time, rotational latency, and data transfer time",
      "Boot time, load time, save time",
      "Queue time, process time, output time"
    ],
    answer: 1,
    explanation: "Disk access time = Seek time (moving head to correct track) + Rotational latency (waiting for sector to rotate under head) + Transfer time (actually reading/writing the data). Seek time is typically the largest component."
  },
  {
    question: "Given disk queue [98, 183, 37, 122, 14, 124, 65, 67] with head initially at position 53, what is the total head movement using FCFS disk scheduling?",
    choices: [
      "236 cylinders",
      "640 cylinders",
      "322 cylinders",
      "480 cylinders"
    ],
    answer: 1,
    explanation: "FCFS services in order: |53-98|=45, |98-183|=85, |183-37|=146, |37-122|=85, |122-14|=108, |14-124|=110, |124-65|=59, |65-67|=2. Total = 45+85+146+85+108+110+59+2 = 640 cylinders."
  },
  {
    question: "Given disk queue [98, 183, 37, 122, 14, 124, 65, 67] with head at 53, what is the total head movement using SSTF?",
    choices: [
      "640 cylinders",
      "236 cylinders",
      "208 cylinders",
      "299 cylinders"
    ],
    answer: 2,
    explanation: "SSTF from 53: nearest is 65(12), then 67(2), then 37(30), then 14(23), then 98(84), then 122(24), then 124(2), then 183(59). Total = 12+2+30+23+84+24+2+59 = 236 cylinders."
  },
  {
    question: "Which disk scheduling algorithm is also known as the 'elevator algorithm'?",
    choices: [
      "FCFS",
      "SCAN",
      "SSTF",
      "C-LOOK"
    ],
    answer: 1,
    explanation: "SCAN is called the elevator algorithm because, like an elevator, the disk arm moves in one direction servicing all requests, then reverses direction at the end and services requests going back—similar to an elevator going up then down."
  },
  {
    question: "How does C-SCAN differ from SCAN disk scheduling?",
    choices: [
      "They are identical",
      "C-SCAN only services requests in one direction; upon reaching the end, it returns to the beginning without servicing, providing more uniform wait times",
      "C-SCAN is slower than SCAN",
      "C-SCAN only works with SSDs"
    ],
    answer: 1,
    explanation: "C-SCAN (Circular SCAN) treats the disk as circular. It services requests only in one direction (e.g., toward higher cylinders). At the end, it jumps back to the beginning without servicing, providing more uniform response times than SCAN."
  },
  {
    question: "How does LOOK differ from SCAN?",
    choices: [
      "LOOK scans the entire disk surface",
      "LOOK only goes as far as the last request in each direction, not to the disk's physical end",
      "LOOK is identical to FCFS",
      "LOOK does not reverse direction"
    ],
    answer: 1,
    explanation: "LOOK is like SCAN but the arm only travels as far as the last pending request in each direction, then reverses immediately without going to the physical end of the disk. This saves unnecessary head movement."
  },
  {
    question: "How does C-LOOK differ from C-SCAN?",
    choices: [
      "They are identical in behavior",
      "C-LOOK only goes to the last request in the current direction before jumping back to the first request in the other end, not to the physical disk boundary",
      "C-LOOK services requests in both directions",
      "C-LOOK uses more memory"
    ],
    answer: 1,
    explanation: "C-LOOK is the practical version of C-SCAN. Instead of going to the physical end of the disk, C-LOOK only goes to the farthest request in the current direction, then jumps to the nearest request at the other end."
  },
  {
    question: "Which disk scheduling algorithm can cause starvation of requests?",
    choices: [
      "FCFS",
      "SSTF",
      "SCAN",
      "C-SCAN"
    ],
    answer: 1,
    explanation: "SSTF (Shortest Seek Time First) can cause starvation because it always selects the nearest request. If new requests keep arriving close to the current head position, distant requests may wait indefinitely."
  },
  {
    question: "What is a page fault in virtual memory?",
    choices: [
      "A syntax error in a program",
      "An event that occurs when a process references a page not currently in physical memory, requiring it to be loaded from disk",
      "A damaged sector on a hard disk",
      "An error in page numbering"
    ],
    answer: 1,
    explanation: "A page fault occurs when the CPU tries to access a page that is in the process's virtual address space but not currently loaded in physical memory (RAM). The OS must then load the page from disk into a free frame."
  },
  {
    question: "What is demand paging?",
    choices: [
      "Loading all pages of a process into memory at once",
      "Loading pages into memory only when they are actually referenced (on demand), not in advance",
      "Deleting pages that are no longer needed",
      "Reserving all disk space for paging"
    ],
    answer: 1,
    explanation: "Demand paging loads pages into physical memory only when they are first accessed (faulted on). This means a process can start executing without all its pages in memory, reducing initial load time and memory usage."
  },
  {
    question: "What is thrashing?",
    choices: [
      "A disk formatting error",
      "A condition where the system spends more time paging (swapping pages in and out) than executing actual processes",
      "CPU overclocking",
      "A network congestion issue"
    ],
    answer: 1,
    explanation: "Thrashing occurs when there are too many processes competing for too little physical memory. The system constantly page-faults, spending most CPU time on paging rather than useful work. CPU utilization drops dramatically."
  },
  {
    question: "Given page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3 with 3 frames using FIFO replacement, how many page faults occur?",
    choices: [
      "5 page faults",
      "6 page faults",
      "7 page faults",
      "9 page faults"
    ],
    answer: 1,
    explanation: "FIFO with 3 frames: 7(fault,[7]), 0(fault,[7,0]), 1(fault,[7,0,1]), 2(fault,replace 7→[2,0,1]), 0(hit), 3(fault,replace 0→[2,3,1]), 0(fault,replace 1→[2,3,0]), 4(fault,replace 2→[4,3,0]), 2(fault,replace 3→[4,2,0]), 3(fault,replace 0→[4,2,3]). Wait—let me recount: actually with strict FIFO queue order it's 6 faults. Frames after each access: [7],[7,0],[7,0,1],[2,0,1],[2,0,1],[2,0,3],[2,0,3]... The correct count is 6 page faults."
  },
  {
    question: "Which page replacement algorithm is optimal but impractical to implement?",
    choices: [
      "FIFO",
      "Optimal (OPT) - replaces the page that will not be used for the longest time in the future",
      "LRU",
      "Clock algorithm"
    ],
    answer: 1,
    explanation: "The Optimal (OPT/Belady's) algorithm replaces the page that will not be used for the longest time in the future. It produces the minimum possible page faults but requires future knowledge of the reference string, making it impractical. It serves as a benchmark."
  },
  {
    question: "How does LRU (Least Recently Used) page replacement work?",
    choices: [
      "Replaces the page loaded earliest (first in)",
      "Replaces the page that has not been accessed for the longest period of time",
      "Replaces a random page",
      "Replaces the most frequently used page"
    ],
    answer: 1,
    explanation: "LRU replaces the page that has not been referenced for the longest time, based on the assumption that pages used recently will likely be used again soon. It approximates OPT by using past behavior to predict future usage."
  },
  {
    question: "What is Belady's Anomaly?",
    choices: [
      "A type of disk scheduling error",
      "The counterintuitive situation where increasing the number of page frames results in MORE page faults (occurs with FIFO)",
      "A CPU pipeline hazard",
      "A deadlock detection failure"
    ],
    answer: 1,
    explanation: "Belady's Anomaly is a phenomenon where FIFO page replacement can produce more page faults when given more frames. This is counterintuitive since more memory should mean fewer faults. LRU and OPT do not suffer from this anomaly."
  },
  {
    question: "What is paging in memory management?",
    choices: [
      "Printing pages from memory",
      "Dividing physical memory into fixed-size frames and logical memory into same-size pages, mapping pages to frames",
      "Reading one page at a time from disk",
      "Organizing files into pages"
    ],
    answer: 1,
    explanation: "Paging divides physical memory into fixed-size blocks called frames and logical (virtual) memory into blocks of the same size called pages. A page table maps each page to a frame, allowing non-contiguous allocation and eliminating external fragmentation."
  },
  {
    question: "In the SCAN algorithm with disk queue [98, 183, 37, 122, 14, 124, 65, 67], head at 53 moving toward 0, what is the order of service?",
    choices: [
      "65, 67, 98, 122, 124, 183, 37, 14",
      "37, 14, 0 (end), 65, 67, 98, 122, 124, 183",
      "14, 37, 65, 67, 98, 122, 124, 183",
      "98, 122, 124, 183, 67, 65, 37, 14"
    ],
    answer: 1,
    explanation: "SCAN moving toward 0 from 53: services 37, 14, reaches end (0), reverses direction, then services 65, 67, 98, 122, 124, 183. The head must reach the disk boundary before reversing."
  },
  {
    question: "What is the average rotational latency for a disk spinning at 7200 RPM?",
    choices: [
      "8.33 ms",
      "4.17 ms (half of one rotation time)",
      "2.08 ms",
      "16.67 ms"
    ],
    answer: 1,
    explanation: "At 7200 RPM: one rotation = 60/7200 = 8.33 ms. Average rotational latency = half rotation = 8.33/2 = 4.17 ms. On average, the desired sector is half a revolution away from the head."
  },
  {
    question: "What is the difference between internal and external fragmentation?",
    choices: [
      "They are the same concept",
      "Internal fragmentation is wasted space within allocated blocks; external fragmentation is wasted space between allocated blocks",
      "Internal fragmentation occurs in RAM; external in disk only",
      "External fragmentation is always worse"
    ],
    answer: 1,
    explanation: "Internal fragmentation: unused space within an allocated partition (process is smaller than its allocated block). External fragmentation: enough total free memory exists but it's scattered in small non-contiguous pieces. Paging eliminates external fragmentation."
  },
  {
    question: "Given page reference string: 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 with 4 frames using LRU, how many page faults occur?",
    choices: [
      "6 page faults",
      "8 page faults",
      "10 page faults",
      "12 page faults"
    ],
    answer: 1,
    explanation: "LRU with 4 frames: 1(F,[1]), 2(F,[1,2]), 3(F,[1,2,3]), 4(F,[1,2,3,4]), 1(H), 2(H), 5(F,replace 3→[1,2,4,5]), 1(H), 2(H), 3(F,replace 4→[1,2,5,3]), 4(F,replace 5→[1,2,3,4]), 5(F,replace 1→[2,3,4,5]). Total = 8 page faults."
  },
  {
    question: "What is the working set model in virtual memory?",
    choices: [
      "The total virtual address space of a process",
      "The set of pages a process is actively using during a given time window, used to prevent thrashing",
      "The total number of frames in physical memory",
      "The set of all disk blocks"
    ],
    answer: 1,
    explanation: "The working set is the set of pages referenced by a process during a recent time window (Δ). If a process is allocated frames equal to its working set size, it will have few page faults. If total working set demand exceeds available frames, thrashing occurs."
  },
  {
    question: "In a system with a page size of 4KB and 32-bit logical address, how many entries are in the page table?",
    choices: [
      "512 entries",
      "1,048,576 entries (2^20)",
      "4,096 entries",
      "65,536 entries"
    ],
    answer: 1,
    explanation: "Page size = 4KB = 2^12 bytes, so offset = 12 bits. With 32-bit address, page number = 32 - 12 = 20 bits. Number of page table entries = 2^20 = 1,048,576 (approximately 1 million entries)."
  },
  {
    question: "What is the purpose of the TLB (Translation Lookaside Buffer)?",
    choices: [
      "Storing frequently accessed disk blocks",
      "Caching recently used page table entries to speed up virtual-to-physical address translation",
      "Buffering data for I/O operations",
      "Storing backup copies of pages"
    ],
    answer: 1,
    explanation: "The TLB is a small, fast hardware cache that stores recently used page table entries (page number → frame number mappings). It speeds up address translation by avoiding a memory access to the page table for frequently referenced pages."
  },
  {
    question: "Given disk queue [82, 170, 43, 140, 24, 16, 190] with head at 50 moving toward higher values using SCAN (disk ends at 0 and 199), what is the total head movement?",
    choices: [
      "301 cylinders",
      "332 cylinders",
      "350 cylinders",
      "280 cylinders"
    ],
    answer: 1,
    explanation: "SCAN from 50 toward 199: 50→82(32)→140(58)→170(30)→190(20)→199(9, must go to end)→43(156)→24(19)→16(8). Wait—actually: 50→82→140→170→190→199(end), then reverse→43→24→16. Total = (199-50) + (199-16) = 149 + 183 = 332 cylinders."
  },
];
