import { Question } from "./types";

export const networkingQuestions: Question[] = [
  // ==================== PROTOCOLS (15 questions) ====================
  {
    question: "According to Forouzan, what is a protocol in data communications?",
    choices: [
      "A physical cable connecting devices",
      "A set of rules that govern data communications",
      "A type of computer virus",
      "A network topology"
    ],
    answer: 1,
    explanation: "A protocol defines the rules that govern data communications. It determines what is communicated, how it is communicated, and when it is communicated."
  },
  {
    question: "What are the three key elements of a protocol?",
    choices: [
      "Hardware, software, firmware",
      "Syntax, semantics, and timing",
      "Sender, receiver, medium",
      "Encoding, decoding, routing"
    ],
    answer: 1,
    explanation: "The three key elements are: Syntax (structure/format of data), Semantics (meaning of each section of bits), and Timing (when data should be sent and how fast)."
  },
  {
    question: "What is the default port number for HTTPS?",
    choices: ["80", "8080", "443", "8443"],
    answer: 2,
    explanation: "HTTPS (HTTP Secure) uses port 443 by default. HTTP uses port 80. These are well-known port numbers assigned by IANA."
  },
  {
    question: "Which protocol is used to retrieve email from a server while keeping messages on the server?",
    choices: ["SMTP", "POP3", "IMAP", "FTP"],
    answer: 2,
    explanation: "IMAP (Internet Message Access Protocol, port 143) keeps messages on the server and allows access from multiple devices. POP3 (port 110) typically downloads and deletes from server."
  },
  {
    question: "What is the default port number for FTP control connection?",
    choices: ["20", "21", "22", "23"],
    answer: 1,
    explanation: "FTP uses port 21 for the control connection (commands) and port 20 for data transfer. SSH uses port 22, and Telnet uses port 23."
  },
  {
    question: "Which protocol is used for sending email between mail servers?",
    choices: ["POP3", "IMAP", "SMTP", "HTTP"],
    answer: 2,
    explanation: "SMTP (Simple Mail Transfer Protocol, port 25) is used for sending and relaying email between mail servers and from clients to servers."
  },
  {
    question: "What is the default port number for DNS?",
    choices: ["22", "23", "53", "80"],
    answer: 2,
    explanation: "DNS (Domain Name System) uses port 53 for both TCP and UDP. UDP is used for standard queries; TCP is used for zone transfers and large responses."
  },
  {
    question: "Which protocol provides secure remote login to replace Telnet?",
    choices: ["FTP", "SFTP", "SSH", "HTTPS"],
    answer: 2,
    explanation: "SSH (Secure Shell, port 22) provides encrypted remote login and command execution, replacing the insecure Telnet (port 23) which transmits data in plaintext."
  },
  {
    question: "What is the default port number for Telnet?",
    choices: ["21", "22", "23", "25"],
    answer: 2,
    explanation: "Telnet uses port 23. It provides remote terminal access but is insecure because it transmits all data including passwords in plaintext."
  },
  {
    question: "Which protocol is used to automatically assign IP addresses to hosts on a network?",
    choices: ["DNS", "ARP", "DHCP", "NAT"],
    answer: 2,
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS server information to devices joining a network."
  },
  {
    question: "What does ICMP stand for and what is its primary purpose?",
    choices: [
      "Internet Control Message Protocol — used for error reporting and diagnostics",
      "Internet Connection Management Protocol — used for establishing connections",
      "Internal Communication Management Protocol — used for intranet routing",
      "Internet Cache Memory Protocol — used for caching web pages"
    ],
    answer: 0,
    explanation: "ICMP (Internet Control Message Protocol) is used for error reporting and network diagnostics. Tools like ping and traceroute use ICMP messages."
  },
  {
    question: "What is the default port number for POP3?",
    choices: ["25", "110", "143", "993"],
    answer: 1,
    explanation: "POP3 (Post Office Protocol version 3) uses port 110 for unencrypted connections. The secure version (POP3S) uses port 995."
  },
  {
    question: "Which protocol maps IP addresses to MAC addresses on a local network?",
    choices: ["DNS", "DHCP", "ARP", "RARP"],
    answer: 2,
    explanation: "ARP (Address Resolution Protocol) resolves a known IP address to its corresponding MAC address on the local network by broadcasting an ARP request."
  },
  {
    question: "What is the default port number for IMAP?",
    choices: ["25", "110", "143", "443"],
    answer: 2,
    explanation: "IMAP (Internet Message Access Protocol) uses port 143 for unencrypted connections. The secure version (IMAPS) uses port 993."
  },
  {
    question: "What is the default port number for SSH?",
    choices: ["20", "21", "22", "23"],
    answer: 2,
    explanation: "SSH (Secure Shell) uses port 22. It provides encrypted communication for remote login, file transfer, and port forwarding."
  },
  // ==================== INTERNET (10 questions) ====================
  {
    question: "What is the Internet?",
    choices: [
      "A single large computer",
      "A global network of interconnected networks using TCP/IP",
      "A software application for browsing",
      "A local area network"
    ],
    answer: 1,
    explanation: "The Internet is a global system of interconnected computer networks that use the TCP/IP protocol suite to communicate. It is a network of networks."
  },
  {
    question: "What was ARPANET?",
    choices: [
      "The first commercial web browser",
      "The precursor to the Internet, developed by the U.S. Department of Defense",
      "A protocol for email transmission",
      "A type of network topology"
    ],
    answer: 1,
    explanation: "ARPANET (Advanced Research Projects Agency Network) was developed in the late 1960s by the U.S. DoD and is considered the predecessor of the modern Internet."
  },
  {
    question: "What is the relationship between the Internet and the World Wide Web (WWW)?",
    choices: [
      "They are the same thing",
      "The Internet is the global network infrastructure; the WWW is a service that runs on it",
      "The WWW is the hardware; the Internet is the software",
      "The Internet is only for email"
    ],
    answer: 1,
    explanation: "The Internet is the physical/logical global network infrastructure. The WWW is one of many services (like email, FTP) that runs on top of the Internet, using HTTP/HTTPS."
  },
  {
    question: "What does URL stand for?",
    choices: [
      "Universal Resource Link",
      "Uniform Resource Locator",
      "United Resource Location",
      "Universal Routing Language"
    ],
    answer: 1,
    explanation: "URL (Uniform Resource Locator) is the address used to access resources on the Internet. It includes the protocol, domain name, and path (e.g., https://www.example.com/page)."
  },
  {
    question: "What is an ISP?",
    choices: [
      "Internet Security Protocol",
      "Internet Service Provider",
      "Internal System Process",
      "Internet Switching Point"
    ],
    answer: 1,
    explanation: "An ISP (Internet Service Provider) is a company that provides access to the Internet for individuals and organizations."
  },
  {
    question: "What is the function of a web browser?",
    choices: [
      "To host web pages on a server",
      "To interpret and display web pages retrieved from web servers",
      "To route packets between networks",
      "To assign IP addresses"
    ],
    answer: 1,
    explanation: "A web browser is a client application that requests, interprets, and displays web pages (HTML, CSS, JavaScript) retrieved from web servers using HTTP/HTTPS."
  },
  {
    question: "In the DNS hierarchy, what is the role of a root server?",
    choices: [
      "To store all website content",
      "To respond to queries by directing them to the appropriate top-level domain (TLD) server",
      "To assign IP addresses to clients",
      "To encrypt DNS queries"
    ],
    answer: 1,
    explanation: "Root servers are at the top of the DNS hierarchy. They respond to queries by pointing to the appropriate TLD servers (.com, .org, .net, etc.) which then direct to authoritative servers."
  },
  {
    question: "What is the client-server model?",
    choices: [
      "A network topology where all devices are equal",
      "A model where a client requests services and a server provides them",
      "A type of switching method",
      "A protocol for file transfer"
    ],
    answer: 1,
    explanation: "In the client-server model, a client initiates requests for services or resources, and a server processes those requests and returns responses. Web browsing is a common example."
  },
  {
    question: "What characterizes a peer-to-peer (P2P) network model?",
    choices: [
      "One central server handles all requests",
      "Each node can act as both client and server simultaneously",
      "Only one device can communicate at a time",
      "It requires a dedicated DNS server"
    ],
    answer: 1,
    explanation: "In a peer-to-peer model, each node (peer) can function as both a client and a server. Peers share resources directly without a central server (e.g., BitTorrent)."
  },
  {
    question: "Which part of a URL specifies the protocol used to access the resource?",
    choices: [
      "The domain name",
      "The scheme (e.g., http:// or https://)",
      "The path",
      "The port number"
    ],
    answer: 1,
    explanation: "The scheme (protocol) is the first part of a URL (e.g., http://, https://, ftp://) and specifies how the resource should be accessed."
  },
  // ==================== ADDRESSING (20 questions) ====================
  {
    question: "How many bits are in an IPv4 address?",
    choices: ["16 bits", "32 bits", "64 bits", "128 bits"],
    answer: 1,
    explanation: "IPv4 addresses are 32 bits long, written in dotted-decimal notation as four octets (e.g., 192.168.1.1). This allows approximately 4.3 billion unique addresses."
  },
  {
    question: "How many bits are in an IPv6 address?",
    choices: ["32 bits", "64 bits", "128 bits", "256 bits"],
    answer: 2,
    explanation: "IPv6 addresses are 128 bits long, written in hexadecimal notation as eight groups of four hex digits separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)."
  },
  {
    question: "How many bits are in a MAC address?",
    choices: ["32 bits", "48 bits", "64 bits", "128 bits"],
    answer: 1,
    explanation: "A MAC (Media Access Control) address is 48 bits (6 bytes) long, typically written as six pairs of hexadecimal digits (e.g., AA:BB:CC:DD:EE:FF)."
  },
  {
    question: "Which IP address class has a first octet range of 1-126?",
    choices: ["Class A", "Class B", "Class C", "Class D"],
    answer: 0,
    explanation: "Class A addresses have a first octet range of 1-126 (0 is reserved, 127 is loopback). Class A provides 16 million hosts per network with default mask 255.0.0.0."
  },
  {
    question: "Which IP address class has a first octet range of 128-191?",
    choices: ["Class A", "Class B", "Class C", "Class D"],
    answer: 1,
    explanation: "Class B addresses have a first octet range of 128-191, with default subnet mask 255.255.0.0 (/16), supporting up to 65,534 hosts per network."
  },
  {
    question: "Which IP address class has a first octet range of 192-223?",
    choices: ["Class A", "Class B", "Class C", "Class D"],
    answer: 2,
    explanation: "Class C addresses have a first octet range of 192-223, with default subnet mask 255.255.255.0 (/24), supporting up to 254 hosts per network."
  },
  {
    question: "What is the purpose of Class D IP addresses (224-239)?",
    choices: [
      "Standard host addressing",
      "Multicasting",
      "Experimental/research use",
      "Private networking"
    ],
    answer: 1,
    explanation: "Class D addresses (224.0.0.0 to 239.255.255.255) are reserved for multicast groups. They are not assigned to individual hosts but to groups of devices."
  },
  {
    question: "What is the first octet range for Class E IP addresses?",
    choices: ["192-223", "224-239", "240-255", "128-191"],
    answer: 2,
    explanation: "Class E addresses range from 240.0.0.0 to 255.255.255.255 and are reserved for experimental and future use. They are not available for general addressing."
  },
  {
    question: "What is the loopback address in IPv4?",
    choices: ["192.168.0.1", "10.0.0.1", "127.0.0.1", "255.255.255.255"],
    answer: 2,
    explanation: "127.0.0.1 is the IPv4 loopback address, used to test network software without sending packets over a physical network. The entire 127.0.0.0/8 block is reserved for loopback."
  },
  {
    question: "Which of the following is a valid private IP address range?",
    choices: [
      "11.0.0.0 to 11.255.255.255",
      "10.0.0.0 to 10.255.255.255",
      "172.0.0.0 to 172.255.255.255",
      "192.0.0.0 to 192.255.255.255"
    ],
    answer: 1,
    explanation: "The private IP ranges defined in RFC 1918 are: 10.0.0.0/8, 172.16.0.0/12 (172.16.0.0 - 172.31.255.255), and 192.168.0.0/16."
  },
  {
    question: "Which private IP range belongs to Class B?",
    choices: [
      "10.0.0.0 to 10.255.255.255",
      "172.16.0.0 to 172.31.255.255",
      "192.168.0.0 to 192.168.255.255",
      "169.254.0.0 to 169.254.255.255"
    ],
    answer: 1,
    explanation: "The Class B private range is 172.16.0.0 to 172.31.255.255 (172.16.0.0/12). The Class A private range is 10.0.0.0/8, and Class C is 192.168.0.0/16."
  },
  {
    question: "Given the network 192.168.1.0/26, how many usable host addresses are available per subnet?",
    choices: ["30", "62", "126", "254"],
    answer: 1,
    explanation: "A /26 subnet has 6 host bits (32-26=6). Total addresses = 2^6 = 64. Usable hosts = 64 - 2 (network and broadcast) = 62."
  },
  {
    question: "What does CIDR notation /24 represent?",
    choices: [
      "24 hosts on the network",
      "24 bits for the network portion of the address",
      "24 subnets available",
      "24 routers in the path"
    ],
    answer: 1,
    explanation: "CIDR (Classless Inter-Domain Routing) notation /24 means the first 24 bits are the network portion, equivalent to subnet mask 255.255.255.0, leaving 8 bits for hosts."
  },
  {
    question: "What is the subnet mask for a /28 network?",
    choices: [
      "255.255.255.0",
      "255.255.255.224",
      "255.255.255.240",
      "255.255.255.248"
    ],
    answer: 2,
    explanation: "A /28 means 28 network bits. The last octet has 4 network bits: 11110000 = 240. So the subnet mask is 255.255.255.240, providing 14 usable hosts per subnet."
  },
  {
    question: "What is NAT (Network Address Translation)?",
    choices: [
      "A routing protocol",
      "A technique that translates private IP addresses to public IP addresses",
      "A type of DNS record",
      "A firewall rule language"
    ],
    answer: 1,
    explanation: "NAT translates private (non-routable) IP addresses to public IP addresses, allowing multiple devices on a LAN to share a single public IP for Internet access."
  },
  {
    question: "Given 10.0.0.0/8, how many total host addresses are available?",
    choices: [
      "254",
      "65,534",
      "16,777,214",
      "4,294,967,294"
    ],
    answer: 2,
    explanation: "A /8 network has 24 host bits. Total addresses = 2^24 = 16,777,216. Usable hosts = 16,777,216 - 2 = 16,777,214."
  },
  {
    question: "What is the purpose of a subnet mask?",
    choices: [
      "To encrypt network traffic",
      "To determine which portion of an IP address is the network part and which is the host part",
      "To assign MAC addresses",
      "To configure DNS settings"
    ],
    answer: 1,
    explanation: "A subnet mask separates an IP address into the network portion and host portion. Devices use it to determine if a destination is on the same local network or requires routing."
  },
  {
    question: "How many subnets are created when a Class C network is subnetted with a /27 mask?",
    choices: ["2", "4", "8", "16"],
    answer: 2,
    explanation: "A Class C default is /24. With /27, we borrow 3 bits (27-24=3) from the host portion for subnetting. Number of subnets = 2^3 = 8."
  },
  {
    question: "What is the broadcast address for the network 192.168.1.64/26?",
    choices: [
      "192.168.1.64",
      "192.168.1.127",
      "192.168.1.128",
      "192.168.1.255"
    ],
    answer: 1,
    explanation: "For 192.168.1.64/26: block size = 64. Network address = .64, next network = .128, so broadcast = .127 (one less than next network)."
  },
  {
    question: "Which IPv4 address notation is also known as dotted-decimal notation?",
    choices: [
      "192.168.1.1",
      "2001:db8::1",
      "AA:BB:CC:DD:EE:FF",
      "0xC0A80101"
    ],
    answer: 0,
    explanation: "IPv4 addresses in dotted-decimal notation are written as four decimal numbers (0-255) separated by dots (e.g., 192.168.1.1). IPv6 uses colon-hex notation."
  },
  // ==================== OSI REFERENCE MODEL (20 questions) ====================
  {
    question: "How many layers does the OSI reference model have?",
    choices: ["4", "5", "6", "7"],
    answer: 3,
    explanation: "The OSI (Open Systems Interconnection) model has 7 layers: Physical (1), Data Link (2), Network (3), Transport (4), Session (5), Presentation (6), Application (7)."
  },
  {
    question: "What is the correct order of OSI layers from bottom (Layer 1) to top (Layer 7)?",
    choices: [
      "Application, Presentation, Session, Transport, Network, Data Link, Physical",
      "Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "Physical, Network, Data Link, Transport, Presentation, Session, Application",
      "Application, Transport, Network, Data Link, Physical, Session, Presentation"
    ],
    answer: 1,
    explanation: "From bottom to top: Physical, Data Link, Network, Transport, Session, Presentation, Application. Mnemonic: 'Please Do Not Throw Sausage Pizza Away.'"
  },
  {
    question: "Which OSI layer is responsible for routing and logical addressing?",
    choices: [
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)",
      "Session Layer (Layer 5)"
    ],
    answer: 1,
    explanation: "The Network Layer (Layer 3) handles logical addressing (IP addresses) and routing — determining the best path for data packets across interconnected networks."
  },
  {
    question: "Which OSI layer handles end-to-end delivery, segmentation, and flow control?",
    choices: [
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)",
      "Session Layer (Layer 5)",
      "Data Link Layer (Layer 2)"
    ],
    answer: 1,
    explanation: "The Transport Layer (Layer 4) provides end-to-end delivery, segmentation/reassembly, flow control, and error recovery. TCP and UDP operate at this layer."
  },
  {
    question: "Which OSI layer transmits raw bits over a physical medium?",
    choices: [
      "Data Link Layer",
      "Network Layer",
      "Physical Layer",
      "Transport Layer"
    ],
    answer: 2,
    explanation: "The Physical Layer (Layer 1) handles the transmission of raw bits over a physical medium. It defines electrical signals, cable types, connectors, and data rates."
  },
  {
    question: "Which OSI layer is responsible for framing, MAC addressing, and error detection?",
    choices: [
      "Physical Layer (Layer 1)",
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)"
    ],
    answer: 1,
    explanation: "The Data Link Layer (Layer 2) organizes bits into frames, provides MAC addressing, error detection (CRC), and media access control. Switches operate at this layer."
  },
  {
    question: "What is the PDU (Protocol Data Unit) at the Transport Layer?",
    choices: ["Bits", "Frames", "Packets", "Segments"],
    answer: 3,
    explanation: "PDU names by layer: Physical=Bits, Data Link=Frames, Network=Packets, Transport=Segments, Session/Presentation/Application=Data."
  },
  {
    question: "What is the PDU at the Network Layer?",
    choices: ["Bits", "Frames", "Packets", "Segments"],
    answer: 2,
    explanation: "At the Network Layer (Layer 3), data is organized into packets (or datagrams). These contain source and destination IP addresses for routing."
  },
  {
    question: "What is the PDU at the Data Link Layer?",
    choices: ["Bits", "Frames", "Packets", "Segments"],
    answer: 1,
    explanation: "At the Data Link Layer (Layer 2), data is organized into frames. Frames include MAC addresses, payload, and error-checking information (FCS/CRC)."
  },
  {
    question: "At which OSI layer does a router primarily operate?",
    choices: [
      "Layer 1 (Physical)",
      "Layer 2 (Data Link)",
      "Layer 3 (Network)",
      "Layer 4 (Transport)"
    ],
    answer: 2,
    explanation: "Routers operate primarily at Layer 3 (Network Layer). They use IP addresses to make forwarding decisions and route packets between different networks."
  },
  {
    question: "At which OSI layer does a switch primarily operate?",
    choices: [
      "Layer 1 (Physical)",
      "Layer 2 (Data Link)",
      "Layer 3 (Network)",
      "Layer 4 (Transport)"
    ],
    answer: 1,
    explanation: "Switches operate at Layer 2 (Data Link Layer). They use MAC addresses to forward frames to the correct port. Layer 3 switches can also perform routing."
  },
  {
    question: "At which OSI layer does a hub operate?",
    choices: [
      "Layer 1 (Physical)",
      "Layer 2 (Data Link)",
      "Layer 3 (Network)",
      "Layer 4 (Transport)"
    ],
    answer: 0,
    explanation: "A hub operates at Layer 1 (Physical Layer). It simply regenerates and broadcasts electrical signals to all ports without any intelligent forwarding."
  },
  {
    question: "What is the function of the Session Layer (Layer 5)?",
    choices: [
      "Data encryption and compression",
      "Establishing, managing, and terminating sessions between applications",
      "Routing packets across networks",
      "Converting data formats"
    ],
    answer: 1,
    explanation: "The Session Layer (Layer 5) establishes, manages, and terminates communication sessions between applications. It handles dialog control and synchronization."
  },
  {
    question: "What is the function of the Presentation Layer (Layer 6)?",
    choices: [
      "Routing and addressing",
      "Translation, encryption, and compression of data",
      "Establishing sessions",
      "Error detection in frames"
    ],
    answer: 1,
    explanation: "The Presentation Layer (Layer 6) handles data translation (e.g., ASCII to EBCDIC), encryption/decryption, and data compression for the Application Layer."
  },
  {
    question: "What is the function of the Application Layer (Layer 7)?",
    choices: [
      "Transmitting raw bits",
      "Providing network services directly to end-user applications",
      "Routing packets between networks",
      "Managing physical connections"
    ],
    answer: 1,
    explanation: "The Application Layer (Layer 7) provides network services directly to end-user applications such as email, file transfer, and web browsing (HTTP, FTP, SMTP, DNS)."
  },
  {
    question: "What is encapsulation in the context of the OSI model?",
    choices: [
      "Removing headers from data as it moves up the layers",
      "Adding protocol-specific headers (and trailers) to data as it moves down through the layers",
      "Encrypting data at the Presentation Layer",
      "Compressing data for faster transmission"
    ],
    answer: 1,
    explanation: "Encapsulation is the process of adding headers (and sometimes trailers) at each layer as data moves down the OSI model from Application to Physical before transmission."
  },
  {
    question: "What is decapsulation?",
    choices: [
      "Adding headers at each layer",
      "Removing headers at each layer as data moves up through the OSI model at the receiving end",
      "Encrypting data",
      "Fragmenting large packets"
    ],
    answer: 1,
    explanation: "Decapsulation is the reverse of encapsulation. At the receiving end, each layer removes its corresponding header as data moves up from Physical to Application layer."
  },
  {
    question: "Which OSI layers are combined into the Application Layer of the TCP/IP model?",
    choices: [
      "Physical and Data Link",
      "Session, Presentation, and Application",
      "Transport and Network",
      "Network and Data Link"
    ],
    answer: 1,
    explanation: "The TCP/IP Application Layer combines the functions of OSI Layers 5 (Session), 6 (Presentation), and 7 (Application) into a single layer."
  },
  {
    question: "Which layer is responsible for dialog control (simplex, half-duplex, full-duplex)?",
    choices: [
      "Transport Layer",
      "Session Layer",
      "Presentation Layer",
      "Application Layer"
    ],
    answer: 1,
    explanation: "The Session Layer (Layer 5) manages dialog control, determining whether communication is simplex, half-duplex, or full-duplex between two systems."
  },
  {
    question: "What PDU name is used at the Physical Layer?",
    choices: ["Segments", "Packets", "Frames", "Bits"],
    answer: 3,
    explanation: "At the Physical Layer (Layer 1), data is represented as raw bits (0s and 1s) transmitted as electrical, optical, or radio signals over the physical medium."
  },
  // ==================== TCP/IP MODEL (15 questions) ====================
  {
    question: "How many layers does the TCP/IP model have?",
    choices: ["3", "4", "5", "7"],
    answer: 1,
    explanation: "The TCP/IP model has 4 layers: Network Access (Link), Internet, Transport, and Application."
  },
  {
    question: "What are the four layers of the TCP/IP model from bottom to top?",
    choices: [
      "Physical, Internet, Transport, Application",
      "Network Access, Internet, Transport, Application",
      "Data Link, Network, Transport, Application",
      "Link, Routing, Session, Application"
    ],
    answer: 1,
    explanation: "The TCP/IP model layers from bottom to top: Network Access (Link), Internet, Transport, and Application."
  },
  {
    question: "Which TCP/IP layer corresponds to OSI Layers 1 and 2?",
    choices: [
      "Internet Layer",
      "Transport Layer",
      "Network Access (Link) Layer",
      "Application Layer"
    ],
    answer: 2,
    explanation: "The TCP/IP Network Access (Link) Layer combines the functions of OSI Layer 1 (Physical) and Layer 2 (Data Link), handling physical transmission and framing."
  },
  {
    question: "What are the three steps of the TCP three-way handshake?",
    choices: [
      "SYN, ACK, FIN",
      "SYN, SYN-ACK, ACK",
      "ACK, SYN, FIN",
      "FIN, ACK, RST"
    ],
    answer: 1,
    explanation: "TCP three-way handshake: (1) Client sends SYN, (2) Server responds with SYN-ACK, (3) Client sends ACK. The connection is now established."
  },
  {
    question: "How does TCP terminate a connection?",
    choices: [
      "By sending a RST packet",
      "By using a four-way handshake with FIN and ACK segments",
      "By simply stopping transmission",
      "By sending a SYN-FIN packet"
    ],
    answer: 1,
    explanation: "TCP connection termination uses a four-way handshake: FIN from initiator, ACK from receiver, FIN from receiver, ACK from initiator. Each side independently closes."
  },
  {
    question: "What is the key difference between TCP and UDP?",
    choices: [
      "TCP is faster than UDP",
      "TCP is connection-oriented and reliable; UDP is connectionless and unreliable",
      "UDP supports larger packets than TCP",
      "TCP is used only for email; UDP only for web"
    ],
    answer: 1,
    explanation: "TCP is connection-oriented, provides reliable delivery with acknowledgments, flow control, and retransmission. UDP is connectionless, faster, but does not guarantee delivery or order."
  },
  {
    question: "What is a socket in TCP/IP networking?",
    choices: [
      "A physical network connector",
      "A combination of an IP address and a port number that identifies a specific endpoint",
      "A type of network cable",
      "A routing table entry"
    ],
    answer: 1,
    explanation: "A socket is the combination of an IP address and a port number (e.g., 192.168.1.1:80) that uniquely identifies a communication endpoint for a network connection."
  },
  {
    question: "What is TCP flow control?",
    choices: [
      "Controlling the physical speed of the network cable",
      "A mechanism where the receiver controls the rate at which the sender transmits data",
      "Routing packets through the fastest path",
      "Assigning port numbers to applications"
    ],
    answer: 1,
    explanation: "TCP flow control uses a sliding window mechanism where the receiver advertises its buffer capacity (window size) to prevent the sender from overwhelming it with data."
  },
  {
    question: "What is TCP congestion control?",
    choices: [
      "Limiting the number of devices on a network",
      "A mechanism to prevent network congestion by adjusting the sender's transmission rate based on network conditions",
      "Blocking unauthorized traffic",
      "Prioritizing certain types of traffic"
    ],
    answer: 1,
    explanation: "TCP congestion control adjusts the sending rate to avoid overwhelming the network. Algorithms like slow start, congestion avoidance, and fast retransmit manage this."
  },
  {
    question: "Which port number range is designated as 'well-known' ports?",
    choices: [
      "0-1023",
      "1024-49151",
      "49152-65535",
      "0-65535"
    ],
    answer: 0,
    explanation: "Well-known ports range from 0-1023 and are assigned to common services (HTTP=80, FTP=21, SSH=22). Registered ports are 1024-49151. Dynamic/private ports are 49152-65535."
  },
  {
    question: "Which TCP/IP layer is responsible for IP addressing and routing?",
    choices: [
      "Network Access Layer",
      "Internet Layer",
      "Transport Layer",
      "Application Layer"
    ],
    answer: 1,
    explanation: "The Internet Layer of TCP/IP (equivalent to OSI Layer 3) is responsible for IP addressing, routing, and forwarding packets across networks. IP, ICMP, and ARP operate here."
  },
  {
    question: "What happens if a TCP segment is lost during transmission?",
    choices: [
      "The data is permanently lost",
      "The sender retransmits the segment after a timeout or duplicate ACK",
      "The receiver requests it from another server",
      "UDP takes over the transmission"
    ],
    answer: 1,
    explanation: "TCP uses acknowledgments and timers. If an ACK is not received within the timeout period, or if duplicate ACKs are detected, the sender retransmits the lost segment."
  },
  {
    question: "What type of applications typically use UDP instead of TCP?",
    choices: [
      "File transfer and email",
      "Real-time streaming, online gaming, and DNS queries",
      "Web browsing and database access",
      "Remote login and file sharing"
    ],
    answer: 1,
    explanation: "UDP is preferred for real-time applications (video/audio streaming, gaming, VoIP) and DNS queries where speed matters more than reliability and some data loss is acceptable."
  },
  {
    question: "In TCP, what does the SYN flag indicate?",
    choices: [
      "The connection is being terminated",
      "A request to synchronize sequence numbers and initiate a connection",
      "Data is being acknowledged",
      "An error has occurred"
    ],
    answer: 1,
    explanation: "The SYN (Synchronize) flag is used to initiate a TCP connection. It synchronizes sequence numbers between sender and receiver during the three-way handshake."
  },
  {
    question: "Which TCP/IP layer protocols include HTTP, FTP, SMTP, and DNS?",
    choices: [
      "Network Access Layer",
      "Internet Layer",
      "Transport Layer",
      "Application Layer"
    ],
    answer: 3,
    explanation: "HTTP, FTP, SMTP, DNS, SSH, and Telnet all operate at the Application Layer of the TCP/IP model, providing services directly to user applications."
  },
  // ==================== ETHERNET SWITCHING (20 questions) ====================
  {
    question: "What is the primary function of a network switch?",
    choices: [
      "Connect different networks via routing",
      "Forward frames to specific ports based on MAC addresses",
      "Assign IP addresses to hosts",
      "Provide wireless access"
    ],
    answer: 1,
    explanation: "A switch operates at Layer 2 and uses a MAC address table to forward frames only to the port associated with the destination MAC address, reducing unnecessary traffic."
  },
  {
    question: "What is the key difference between a hub and a switch?",
    choices: [
      "No functional difference",
      "A hub floods frames to all ports; a switch forwards frames only to the correct destination port",
      "A switch is slower than a hub",
      "A hub uses MAC addresses for forwarding"
    ],
    answer: 1,
    explanation: "A hub (Layer 1) broadcasts all incoming frames to every port. A switch (Layer 2) learns MAC addresses and intelligently forwards frames only to the appropriate port."
  },
  {
    question: "What is CSMA/CD and where is it used?",
    choices: [
      "A routing algorithm used in routers",
      "A media access method used in traditional Ethernet to detect and handle collisions",
      "A VLAN trunking protocol",
      "A wireless security standard"
    ],
    answer: 1,
    explanation: "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is used in half-duplex Ethernet. Devices listen before sending; if a collision occurs, they back off and retry."
  },
  {
    question: "What is a collision domain?",
    choices: [
      "The entire internet",
      "A network segment where simultaneous data transmissions can result in collisions",
      "A VLAN configuration",
      "A type of network topology"
    ],
    answer: 1,
    explanation: "A collision domain is a network segment where frames from two or more devices can collide. Hubs extend collision domains; switches create separate collision domains per port."
  },
  {
    question: "What is a broadcast domain?",
    choices: [
      "A wireless network coverage area",
      "A network segment where a broadcast frame is forwarded to all devices",
      "The range of a hub",
      "A DNS zone"
    ],
    answer: 1,
    explanation: "A broadcast domain is the set of all devices that receive a broadcast frame. Switches forward broadcasts to all ports; only routers (or VLANs) separate broadcast domains."
  },
  {
    question: "What is a VLAN (Virtual LAN)?",
    choices: [
      "A VPN connection",
      "A logical segmentation of a switch into separate broadcast domains",
      "A wireless LAN",
      "A type of IP address"
    ],
    answer: 1,
    explanation: "A VLAN logically divides a physical switch into multiple broadcast domains. Devices in different VLANs cannot communicate without a router (inter-VLAN routing)."
  },
  {
    question: "What is the purpose of STP (Spanning Tree Protocol)?",
    choices: [
      "To encrypt switch traffic",
      "To prevent switching loops by blocking redundant paths in a switched network",
      "To assign VLANs automatically",
      "To compress Ethernet frames"
    ],
    answer: 1,
    explanation: "STP (IEEE 802.1D) prevents layer 2 switching loops by detecting redundant paths and logically blocking them, maintaining a loop-free topology while keeping backup paths available."
  },
  {
    question: "What is the difference between full-duplex and half-duplex communication?",
    choices: [
      "Full-duplex is wireless; half-duplex is wired",
      "Full-duplex allows simultaneous two-way communication; half-duplex allows only one direction at a time",
      "Half-duplex is faster than full-duplex",
      "Full-duplex requires a hub; half-duplex requires a switch"
    ],
    answer: 1,
    explanation: "Full-duplex allows data to flow in both directions simultaneously (no collisions). Half-duplex allows transmission in only one direction at a time, requiring CSMA/CD."
  },
  {
    question: "What does 100Base-TX refer to?",
    choices: [
      "100 Mbps Ethernet over fiber optic cable",
      "100 Mbps Fast Ethernet over Category 5 or higher UTP cable",
      "100 Mbps Ethernet over coaxial cable",
      "1000 Mbps Ethernet over twisted pair"
    ],
    answer: 1,
    explanation: "100Base-TX is Fast Ethernet (100 Mbps) over Category 5 (or higher) unshielded twisted pair (UTP) cable using two pairs, with a maximum distance of 100 meters."
  },
  {
    question: "What does 1000Base-T refer to?",
    choices: [
      "1000 Mbps Ethernet over fiber",
      "1000 Mbps (Gigabit) Ethernet over Category 5e or higher UTP cable",
      "100 Mbps Ethernet over twisted pair",
      "10 Mbps Ethernet over coaxial"
    ],
    answer: 1,
    explanation: "1000Base-T is Gigabit Ethernet (1000 Mbps) over Category 5e or Category 6 UTP cable using all four pairs, with a maximum distance of 100 meters."
  },
  {
    question: "What does 10Base-T refer to?",
    choices: [
      "10 Mbps Ethernet over twisted pair cable",
      "10 Gbps Ethernet over fiber",
      "10 Mbps Ethernet over coaxial cable",
      "100 Mbps Ethernet over twisted pair"
    ],
    answer: 0,
    explanation: "10Base-T is 10 Mbps Ethernet over unshielded twisted pair (UTP) cable (Category 3 or higher) with a maximum segment length of 100 meters."
  },
  {
    question: "How does a switch learn MAC addresses?",
    choices: [
      "By reading IP headers",
      "By examining the source MAC address of incoming frames and associating it with the port",
      "By querying a DNS server",
      "By receiving ARP replies from a router"
    ],
    answer: 1,
    explanation: "When a frame arrives, the switch reads the source MAC address and records it in its MAC address table along with the port number. This is called the learning process."
  },
  {
    question: "What does a switch do when it receives a frame with an unknown destination MAC address?",
    choices: [
      "Drops the frame",
      "Floods (forwards) the frame to all ports except the source port",
      "Sends it to the router",
      "Stores it until the destination is known"
    ],
    answer: 1,
    explanation: "When the destination MAC is not in its table, the switch floods the frame to all ports except the incoming port. When the destination replies, the switch learns its port."
  },
  {
    question: "What is the structure of an Ethernet frame?",
    choices: [
      "Source IP, Destination IP, Data, Checksum",
      "Preamble, Destination MAC, Source MAC, Type/Length, Data, FCS",
      "Header, Payload, Footer",
      "SYN, Data, ACK, FIN"
    ],
    answer: 1,
    explanation: "An Ethernet frame consists of: Preamble (7 bytes + 1 byte SFD), Destination MAC (6 bytes), Source MAC (6 bytes), Type/Length (2 bytes), Data (46-1500 bytes), and FCS (4 bytes)."
  },
  {
    question: "What is the ARP process when Host A wants to communicate with Host B on the same LAN?",
    choices: [
      "Host A sends a unicast ARP request directly to Host B",
      "Host A broadcasts an ARP request; Host B replies with a unicast ARP reply containing its MAC address",
      "Host A contacts the DNS server for Host B's MAC",
      "The router provides Host B's MAC address to Host A"
    ],
    answer: 1,
    explanation: "Host A broadcasts an ARP request ('Who has IP x.x.x.x?') to all devices on the LAN. Host B recognizes its IP and responds with a unicast ARP reply containing its MAC address."
  },
  {
    question: "How does a switch differ from a router?",
    choices: [
      "A switch uses IP addresses; a router uses MAC addresses",
      "A switch forwards frames using MAC addresses (Layer 2); a router forwards packets using IP addresses (Layer 3)",
      "A router is faster than a switch",
      "There is no difference"
    ],
    answer: 1,
    explanation: "A switch operates at Layer 2 using MAC addresses to forward frames within a network. A router operates at Layer 3 using IP addresses to route packets between different networks."
  },
  {
    question: "What happens to the collision domain when replacing a hub with a switch?",
    choices: [
      "The collision domain becomes larger",
      "Each port on the switch becomes its own collision domain, reducing collisions",
      "Collision domains are eliminated entirely from the network",
      "No change occurs"
    ],
    answer: 1,
    explanation: "A hub creates one large collision domain for all ports. A switch creates a separate collision domain per port, so devices on different ports cannot collide, improving performance."
  },
  {
    question: "Which device separates broadcast domains?",
    choices: [
      "Hub",
      "Switch (without VLANs)",
      "Router",
      "Repeater"
    ],
    answer: 2,
    explanation: "Routers separate broadcast domains — broadcasts do not pass through routers. Switches (without VLANs) forward broadcasts to all ports. VLANs on a switch also create separate broadcast domains."
  },
  {
    question: "According to Forouzan, what are the five components of data communication?",
    choices: [
      "Hardware, software, protocol, topology, medium",
      "Message, sender, receiver, transmission medium, and protocol",
      "Client, server, router, switch, cable",
      "Data, signal, encoding, modulation, transmission"
    ],
    answer: 1,
    explanation: "Forouzan defines five components of data communication: Message (data), Sender (device that sends), Receiver (device that receives), Transmission medium (physical path), and Protocol (rules)."
  },
  {
    question: "In switch operation, what is 'forwarding'?",
    choices: [
      "Sending a frame to all ports",
      "Sending a frame out only the specific port associated with the destination MAC address",
      "Dropping a frame due to errors",
      "Learning a new MAC address"
    ],
    answer: 1,
    explanation: "Forwarding is when a switch finds the destination MAC address in its MAC address table and sends the frame only to the specific port where that device is connected."
  },
];
