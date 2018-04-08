import { Bullet } from '../models/bullet';

/**
 * DOMAIN: 1.0 Windows-OS
 */
const DOMAIN_ONE: Bullet[] = [
  {
    objectiveNumber: 1.1,
    bullets: [
      {
        "title": "• Features:",
        "subBullets": [
          "- 32-bit vs. 64-bit",
          "- Aero, Gadgets",
          "- User Account Control",
          "- BitLocker, Shadow Copy",
          "- System restore, Ready Boost",
          "- Sidebar, compatibility mode",
          "- Virtual XP mode, Easy Trransfer",
          "- Administrative tools, Defender",
          "- Windows Firewall, Security Center",
          "- Event Viewer",
          "- File structure and paths, ",
          "- Category view vs. classic view",
          "- Side-by-side apps, Metro UI,",
          "- Pinning, One Drive, Windows store",
          "- Multimonitor, Task bars, Charms",
          "- Start Screen, PowerShell",
          "- Live sign in, Action Center"
        ]
      },
      {
        "title": "• Upgrade paths",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 1.2,
    bullets: [
      {
        "title": "• Boot methods",
        "subBullets": [
          "- USB, CD-ROM, DVD",
          "- PXE, Solid state/flash drives",
          "- Netboot",
          "- External/hot swappable drive",
          "- Internal hard drive (partition)"
        ]
      },
      {
        "title": "• Type of installations",
        "subBullets": [
          "- Unattended installation",
          "- Upgrade",
          "- Clean install",
          "- Repair installation",
          "- Multiboot",
          "- Remote network installation",
          "- Image deployment",
          "- Recovery partition",
          "- Refresh/restore"
        ]
      },
      {
        "title": "• Partitioning",
        "subBullets": [
          "- Dynamic",
          "- Basic",
          "- Primary, Extended",
          "- Logical, GPT"
        ]
      },
      {
        "title": "• File system types/formatting",
        "subBullets": [
          "- exFAT, FAT32, NTFS",
          "- CDFS, NFS, ext3, ext4",
          "- Quick format vs. full format"
        ]
      },
      {
        "title": "• Load alternate third-party drivers",
        "subBullets": []
      },
      {
        "title": "• Workgroup vs. domain setup",
        "subBullets": []
      },
      {
        "title": "• Time/date/region/language settings",
        "subBullets": []
      },
      {
        "title": "• Driver installation",
        "subBullets": ["- Software and Windows updates"]
      },
      {
        "title": "• Factory recovery partition",
        "subBullets": []
      },
      {
        "title": "• Properly formatted boot drive",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 1.3,
    bullets: [
      {
        "title": "• TASKKILL",
        "subBullets": []
      },
      {
        "title": "• BOOTREC",
        "subBullets": []
      },
      {
        "title": "• SHUTDOWN",
        "subBullets": []
      },
      {
        "title": "• TASKLIST",
        "subBullets": []
      },
      {
        "title": "• MD",
        "subBullets": []
      },
      {
        "title": "• RD",
        "subBullets": []
      },
      {
        "title": "• CD",
        "subBullets": []
      },
      {
        "title": "• DEL",
        "subBullets": []
      },
      {
        "title": "• FORMAT",
        "subBullets": []
      },
      {
        "title": "• COPY",
        "subBullets": []
      },
      {
        "title": "• XCOPY",
        "subBullets": []
      },
      {
        "title": "• ROBOCOPY",
        "subBullets": []
      },
      {
        "title": "• DISKPART",
        "subBullets": []
      },
      {
        "title": "• SFC",
        "subBullets": []
      },
      {
        "title": "• CHKDSK",
        "subBullets": []
      },
      {
        "title": "• GPUPDATE",
        "subBullets": []
      },
      {
        "title": "• GPRESULT",
        "subBullets": []
      },
      {
        "title": "• DIR",
        "subBullets": []
      },
      {
        "title": "• EXIT",
        "subBullets": []
      },
      {
        "title": "• HELP",
        "subBullets": []
      },
      {
        "title": "• EXPAND",
        "subBullets": []
      },
      {
        "title": "• [command name] /?",
        "subBullets": []
      },
      {
        "title": "• Commands available with:",
        "subBullets": [
          "- Standard privileges",
          "- Administrative privileges"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.4,
    bullets: [
      {
        "title": "• Administrative",
        "subBullets": [
          "- Computer management",
          "- Device manager",
          "- Local users and groups",
          "- Local security policy",
          "- Performance monitor",
          "- Services",
          "- System configuration",
          "- Task scheduler",
          "- Component services",
          "- Data sources",
          "- Print management",
          "- Windows memory diagnostics",
          "- Windows firewall",
          "- Advanced security"
        ]
      },
      {
        "title": "• MSCONFIG",
        "subBullets": [
          "- General, Boot",
          "- Services, Startup",
          "- Tools"
        ]
      },
      {
        "title": "• Task Manager",
        "subBullets": [
          "- Applications, Processes",
          "- Performance, Networking",
          "- Users"
        ]
      },
      {
        "title": "• Disk management",
        "subBullets": [
          "- Drive status",
          "- Mounting, Initializing",
          "- Extending partitions",
          "- Splitting partitions",
          "- Shrink partitions",
          "- Assigning/changing drive letters",
          "- Adding drives, Adding arrays",
          "- Storage spaces"
        ]
      },
      {
        "title": "• Other",
        "subBullets": [
          "- User State Migration tool (USMT)",
          "- Windows Easy Transfer",
          "- Windows Upgrade Advisor"
        ]
      },
      {
        "title": "• System utilities",
        "subBullets": [
          "- REGEDIT, COMMAND",
          "- SERVICES.MSC",
          "- MMC, MSTSC",
          "- NOTEPAD, EXPLORER",
          "- MSINFO32, DXDIAG",
          "- DEFRAG, System restore",
          "- Windows Update"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.5,
    bullets: [
      {
        "title": "• Internet options",
        "subBullets": [
          "- Connections, Security",
          "- General, Privacy",
          "- Programs, Advanced"
        ]
      },
      {
        "title": "• Display/display settings",
        "subBullets": [
          "- Resolution",
          "- Color depth",
          "- Refresh rate"
        ]
      },
      {
        "title": "• User accounts",
        "subBullets": []
      },
      {
        "title": "• Folder options",
        "subBullets": [
          "- View hidden files ",
          "- Hide extensions",
          "- General options",
          "- View options"
        ]
      },
      {
        "title": "• System",
        "subBullets": [
          "- Performance (virtual memory)",
          "- Remote settings",
          "- System protection"
        ]
      },
      {
        "title": "• Windows firewall",
        "subBullets": []
      },
      {
        "title": "• Power options",
        "subBullets": [
          "- Hibernate, Power plans",
          "- Sleep/suspend, Standby"
        ]
      },
      {
        "title": "• Programs and features",
        "subBullets": []
      },
      {
        "title": "• HomeGroup",
        "subBullets": []
      },
      {
        "title": "• Devices and printers",
        "subBullets": []
      },
      {
        "title": "• Sound",
        "subBullets": []
      },
      {
        "title": "• Troubleshooting",
        "subBullets": []
      },
      {
        "title": "• Network and Sharing Center",
        "subBullets": []
      },
      {
        "title": "• Device Manager",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 1.6,
    bullets: [
      {
        "title": "• HomeGroup vs. WorkGroup",
        "subBullets": []
      },
      {
        "title": "• Domain setup",
        "subBullets": []
      },
      {
        "title": "• Network shares",
        "subBullets": [
          "- Administrative shares",
          "- Mapping drives"
        ]
      },
      {
        "title": "• Printer sharing",
        "subBullets": [
          "- Network printer mapping"
        ]
      },
      {
        "title": "• Establish networking connections",
        "subBullets": [
          "- VPN, Dial-ups",
          "- Wireless, Wired",
          "- WWAN (Cellular)"
        ]
      },
      {
        "title": "• Proxy settings",
        "subBullets": []
      },
      {
        "title": "• Remote Desktop Connection",
        "subBullets": []
      },
      {
        "title": "• Remote Assistance",
        "subBullets": []
      },
      {
        "title": "• Home vs. work vs. public network settings",
        "subBullets": []
      },
      {
        "title": "• Firewall settings",
        "subBullets": [
          "- Exceptions",
          "- Configuration",
          "- Enabling/disabling Windows firewall"
        ]
      },
      {
        "title": "• Configure IP Address in Windows",
        "subBullets": [
          "- IP addressing",
          "- Subnet mask",
          "- DNS",
          "- Gateway"
        ]
      },
      {
        "title": "• Network card properties",
        "subBullets": [
          "- Half duplex/full duplex/auto",
          "- Speed",
          "- Wake-on-LAN",
          "- QoS",
          "- BIOS (on-board NIC)"
        ]
      }
    ]
  },
  {
    objectiveNumber: 1.7,
    bullets: [
      {
        "title": "• Best practices",
        "subBullets": [
          "- Scheduled backups",
          "- Scheduled disk maintenance",
          "- Windows updates",
          "- Patch management",
          "- Driver/firmware updates",
          "- Antivirus/Anti-malware  updates"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- Backup",
          "- System restore",
          "- Recovery image",
          "- Disk maintenance utilities"
        ]
      }
    ]
  },
  ];

/**
 * DOMAIN: 2.0 Other-OS
 */
const DOMAIN_TWO: Bullet[] = [
  {
    objectiveNumber: 2.1,
    bullets: [
      {
        "title": "• Best practices",
        "subBullets": [
          "- Scheduled backups",
          "- Scheduled disk maintenance",
          "- System updates/App Store",
          "- Patch management",
          "- Driver/firmware updates",
          "- Antivirus/anti-malware updates"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- Backup/Time Machine",
          "- Restore/snapshot",
          "- Image recovery",
          "- Disk maintenance utilities",
          "- Shell/Terminal",
          "- Screen sharing",
          "- Force Quit"
        ]
      },
      {
        "title": "• Features",
        "subBullets": [
          "- Multiple desktops/Mission Control",
          "- Key Chain",
          "- Spot Light",
          "- iCloud",
          "- Gestures",
          "- Finder",
          "- Remote Disc",
          "- Dock",
          "- Boot Camp"
        ]
      },
      {
        "title": "• Basic Linux commands",
        "subBullets": [
          "- ls, grep, cd",
          "- shutdown",
          "- pwd vs. passwd",
          "- mv, cp , rm, chmod",
          "- chown",
          "- iwconfig/ifconfig",
          "- ps",
          "- su/sudo",
          "- apt-get, vi, dd"
        ]
      }
    ]
  },
  {
    objectiveNumber: 2.2,
    bullets: [
      {
        "title": "• Purpose of virtual machines",
        "subBullets": []
      },
      {
        "title": "• Resource requirements",
        "subBullets": []
      },
      {
        "title": "• Emulator requirements",
        "subBullets": []
      },
      {
        "title": "• Security requirements",
        "subBullets": []
      },
      {
        "title": "• Network requirements",
        "subBullets": []
      },
      {
        "title": "• Hypervisor",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 2.3,
    bullets: [
      {
        "title": "• SaaS",
        "subBullets": []
      },
      {
        "title": "• IaaS",
        "subBullets": []
      },
      {
        "title": "• PaaS",
        "subBullets": []
      },
      {
        "title": "• Public vs. private vs. hybrid vs. community",
        "subBullets": []
      },
      {
        "title": "• Rapid elasticity",
        "subBullets": []
      },
      {
        "title": "• On-demand",
        "subBullets": []
      },
      {
        "title": "• Resource pooling",
        "subBullets": []
      },
      {
        "title": "• Measured service",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 2.4,
    bullets: [
      {
        "title": "• Server roles",
        "subBullets": [
          "- Web server",
          "- File server",
          "- Print server",
          "- DHCP server",
          "- DNS server",
          "- Proxy server",
          "- Mail server",
          "- Authentication server"
        ]
      },
      {
        "title": "• Internet appliance",
        "subBullets": [
          "- UTM",
          "- IDS",
          "- IPS"
        ]
      },
      {
        "title": "• Legacy/embedded systems",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 2.5,
    bullets: [
      {
        "title": "• Android vs. iOS vs. Windows",
        "subBullets": [
          "- Screen orientation",
          "- Screen calibration",
          "- GPS and geotracking",
          "- WiFi calling ",
          "- Launcher/GUI",
          "- Virtual assistant",
          "- SDK/APK",
          "- Emergency notification",
          "- Mobile payment service"
        ]
      },
      {
        "title": "• App source",
        "subBullets": [
          "- Open source vs. closed source",
          "- Google Play Store,",
          "- App Store",
          "- Store"
        ]
      }
    ]
  },
  {
    objectiveNumber: 2.6,
    bullets: [
      {
        "title": "• Wireless/cellular data network",
        "subBullets": [
          "- Hotspot",
          "- Tethering",
          "- Airplane mode"
        ]
      },
      {
        "title": "• Bluetooth",
        "subBullets": [
          "- Enable Bluetooth",
          "- Enable pairing",
          "- Find device for pairing",
          "- Enter appropriate pin code",
          "- Test connectivity"
        ]
      },
      {
        "title": "• Corporate and ISP email configuration",
        "subBullets": [
          "- POP3, IMAP",
          "- Port and SSL settings",
          "- Exchange, S/MIME"
        ]
      },
      {
        "title": "• Integrated commercial provider ",
        "subBullets": []
      },
      {
        "title": "email configuration",
        "subBullets": [
          "- Google/Inbox",
          "- Yahoo",
          "- Outlook.com",
          "- iCloud"
        ]
      },
      {
        "title": "• PRI updates/Baseband updates",
        "subBullets": []
      },
      {
        "title": "• Radio firmware",
        "subBullets": []
      },
      {
        "title": "• IMEI vs. IMSI",
        "subBullets": []
      },
      {
        "title": "• VPN",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 2.7,
    bullets: [
      {
        "title": "• Types of data to synchronize",
        "subBullets": [
          "- Contacts, Programs, Email",
          "- Pictures, Music, Videos",
          "- Calendar, Bookmarks, Documents",
          "- Location data",
          "- Social media data",
          "- eBooks"
        ]
      },
      {
        "title": "• Synchronization methods",
        "subBullets": [
          "- Synchronize to the cloud",
          "- Synchronize to the desktop"
        ]
      },
      {
        "title": "• SSO",
        "subBullets": []
      },
      {
        "title": "• Install the application on the PC",
        "subBullets": [
          "- Software requirements"
        ]
      },
      {
        "title": "• Connection types",
        "subBullets": []
      }
    ]
  }
];

/**
 * DOMAIN: 3.0 Security
 */
const DOMAIN_THREE: Bullet[] = [
  {
    objectiveNumber: 3.1,
    bullets: [
      {
        "title": "• Malware",
        "subBullets": [
          "- Spyware",
          "- Viruses",
          "- Worms",
          "- Trojans",
          "- Rootkits",
          "- Ransomware"
        ]
      },
      {
        "title": "• Phishing",
        "subBullets": []
      },
      {
        "title": "• Spear phishing",
        "subBullets": []
      },
      {
        "title": "• Spoofing",
        "subBullets": []
      },
      {
        "title": "• Social engineering",
        "subBullets": []
      },
      {
        "title": "• Shoulder surfing",
        "subBullets": []
      },
      {
        "title": "• Zero-day attack",
        "subBullets": []
      },
      {
        "title": "• Zombie/botnet",
        "subBullets": []
      },
      {
        "title": "• Brute forcing",
        "subBullets": []
      },
      {
        "title": "• Dictionary attacks",
        "subBullets": []
      },
      {
        "title": "• Non-compliant systems",
        "subBullets": []
      },
      {
        "title": "• Violations of security best practices",
        "subBullets": []
      },
      {
        "title": "• Tailgating",
        "subBullets": []
      },
      {
        "title": "• Man-in-the-middle",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 3.2,
    bullets: [
      {
        "title": "• Physical security",
        "subBullets": [
          "- Lock doors, Mantrap",
          "- Cable locks",
          "- Securing documents/passwords",
          "- Biometrics",
          "- ID badges, Key fobs, RFID badge",
          "- Smart card, Tokens",
          "- Privacy filters",
          "- Entry control roster"
        ]
      },
      {
        "title": "• Digital security",
        "subBullets": [
          "- Antivirus/Anti-malware ",
          "- Firewalls",
          "- User authentication/strong passwords",
          "- Multifactor authentication",
          "- Directory permissions",
          "- VPN, DLP",
          "- Disabling ports",
          "- Access control lists",
          "- Smart card",
          "- Email filtering ",
          "- Trusted/untrusted software sources"
        ]
      },
      {
        "title": "• User education/AUP",
        "subBullets": []
      },
      {
        "title": "• Principle of least privilege",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 3.3,
    bullets: [
      {
        "title": "• User and groups",
        "subBullets": [
          "- Administrator",
          "- Power user",
          "- Guest",
          "- Standard user"
        ]
      },
      {
        "title": "• NTFS vs. Share permissions",
        "subBullets": [
          "- Allow vs. deny",
          "- Moving vs. copying folders and files",
          "- File attributes"
        ]
      },
      {
        "title": "• Shared files and folders",
        "subBullets": [
          "- Administrative shares vs. local shares",
          "- Permission propagation",
          "- Inheritance"
        ]
      },
      {
        "title": "• System files and folders",
        "subBullets": []
      },
      {
        "title": "• User authentication",
        "subBullets": [
          "- Single sign-on"
        ]
      },
      {
        "title": "• Run as administrator vs. standard user",
        "subBullets": []
      },
      {
        "title": "• BitLocker",
        "subBullets": []
      },
      {
        "title": "• BitLocker-To-Go",
        "subBullets": []
      },
      {
        "title": "• EFS",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 3.4,
    bullets: [
      {
        "title": "• Password best practices",
        "subBullets": [
          "- Setting strong passwords",
          "- Password expiration",
          "- Change default username/password",
          "- Screensaver required password",
          "- BIOS/UEFI passwords",
          "- Requiring passwords"
        ]
      },
      {
        "title": "• Account management",
        "subBullets": [
          "- Restricting user permissions",
          "- Login time restrictions",
          "- Disabling guest account",
          "- Failed attempts lockout",
          "- Timeout/screen lock"
        ]
      },
      {
        "title": "• Disable autorun",
        "subBullets": []
      },
      {
        "title": "• Data encryption",
        "subBullets": []
      },
      {
        "title": "• Patch/update management",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 3.5,
    bullets: [
      {
        "title": "• Screen locks",
        "subBullets": [
          "- Fingerprint lock",
          "- Face lock",
          "- Swipe lock",
          "- Passcode lock"
        ]
      },
      {
        "title": "• Remote wipes",
        "subBullets": []
      },
      {
        "title": "• Locator applications ",
        "subBullets": []
      },
      {
        "title": "• Remote backup applications",
        "subBullets": []
      },
      {
        "title": "• Failed login attempt restrictions",
        "subBullets": []
      },
      {
        "title": "• Antivirus/anti-malware ",
        "subBullets": []
      },
      {
        "title": "• Patching/OS updates",
        "subBullets": []
      },
      {
        "title": "• Biometric authentication",
        "subBullets": []
      },
      {
        "title": "• Full device encryption",
        "subBullets": []
      },
      {
        "title": "• Multifactor authentication",
        "subBullets": []
      },
      {
        "title": "• Authenticator applications",
        "subBullets": []
      },
      {
        "title": "• Trusted vs untrusted sources",
        "subBullets": []
      },
      {
        "title": "• Firewalls",
        "subBullets": []
      },
      {
        "title": "• Policies and procedures",
        "subBullets": [
          "- BYOD vs. corporate owned",
          "- Profile security requirements"
        ]
      }
    ]
  },
  {
    objectiveNumber: 3.6,
    bullets: [
      {
        "title": "• Physical destruction",
        "subBullets": [
          "- Shredder",
          "- Drill/hammer",
          "- Electromagnetic (Degaussing)",
          "- Incineration",
          "- Certificate of destruction"
        ]
      },
      {
        "title": "• Recycling or repurposing best practices",
        "subBullets": [
          "- Low-level format vs. standard format",
          "- Overwrite",
          "- Drive wipe"
        ]
      }
    ]
  },
  {
    objectiveNumber: 3.7,
    bullets: [
      {
        "title": "• Wireless specific",
        "subBullets": [
          "- Changing default SSID",
          "- Setting encryption",
          "- Disabling SSID broadcast",
          "- Antenna and access point placement",
          "- Radio power levels",
          "- WPS"
        ]
      },
      {
        "title": "• Change default usernames and passwords",
        "subBullets": []
      },
      {
        "title": "• Enable MAC filtering",
        "subBullets": []
      },
      {
        "title": "• Assign static IP addresses",
        "subBullets": []
      },
      {
        "title": "• Firewall settings",
        "subBullets": []
      },
      {
        "title": "• Port forwarding/mapping",
        "subBullets": []
      },
      {
        "title": "• Disabling ports",
        "subBullets": []
      },
      {
        "title": "• Content filtering/parental controls",
        "subBullets": []
      },
      {
        "title": "• Update firmware",
        "subBullets": []
      },
      {
        "title": "• Physical security",
        "subBullets": []
      }
    ]
  }
];

/**
 * DOMAIN: 4.0 Troubleshooting
 */
const DOMAIN_FOUR: Bullet[] = [
  {
    objectiveNumber: 4.1,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- Proprietary crash screens (BSOD)",
          "- Failure to boot",
          "- Improper shutdown ",
          "- Spontaneous shutdown/restart",
          "- Device fails to start/detected",
          "- Missing DLL message",
          "- Services fails to start",
          "- Compatibility error",
          "- Slow system performance",
          "- Boots to safe mode",
          "- File fails to open",
          "- Missing NTLDR",
          "- Missing boot configuration data",
          "- Missing operating system",
          "- Missing graphical interface",
          "- Missing GRUB/LILO",
          "- Kernel panic",
          "- Graphical Interface fails to load",
          "- Multiple monitor misalignment"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- BIOS/UEFI, SFC, Logs",
          "- System recovery options",
          "- Repair disks",
          "- Pre-installation environments",
          "- MSCONFIG, DEFRAG",
          "- Regsvr32, REGEDIT",
          "- Event viewer",
          "- Safe mode",
          "- Command prompt",
          "- Uninstall/reinstall/repair"
        ]
      }
    ]
  },
  {
    objectiveNumber: 4.2,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- Pop-ups",
          "- Browser redirection",
          "- Security alerts",
          "- Slow performance",
          "- Internet connectivity issues",
          "- PC/OS lock up",
          "- Application crash",
          "- OS updates failures",
          "- Rogue antivirus",
          "- Spam",
          "- Renamed system files",
          "- Files disappearing",
          "- File permission changes",
          "- Hijacked email",
          "- Responses from users regarding email",
          "- Automated replies",
          "- Access denied",
          "- Invalid certificate (trusted root CA)"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- Antivirus software",
          "- Anti-malware software",
          "- Recovery console",
          "- Terminal",
          "- System Restore/Snapshot",
          "- Pre-installation environments",
          "- Event Viewer",
          "- Refresh/restore",
          "- MSCONFIG/Safe boot"
        ]
      },
      {
        "title": "• Best practices for malware removal",
        "subBullets": [
          "- Identify malware symptoms",
          "- Quarantine infected system",
          "- Disable System Restore (in Windows)",
          "- Remediate infected systems",
          "- Update anti-malware software",
          "- Scan and removal techniques",
          "- Schedule scans and run updates",
          "- Enable System Restore",
          "- Create restore point",
          "- Educate end user"
        ]
      }
    ]
  },
  {
    objectiveNumber: 4.3,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- Dim display",
          "- Intermittent wireless",
          "- No wireless connectivity",
          "- No Bluetooth connectivity",
          "- Cannot broadcast to external monitor",
          "- Touchscreen non-responsive",
          "- Apps not loading",
          "- Slow performance",
          "- Unable to decrypt email",
          "- Extremely short battery life",
          "- Overheating",
          "- Frozen system",
          "- No sound from speakers",
          "- Inaccurate touch screen response",
          "- System lockout"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- Hard reset",
          "- Soft reset",
          "- Close running applications",
          "- Reset to factory default",
          "- Adjust configurations/settings",
          "- Uninstall/reinstall apps",
          "- Force stop"
        ]
      }
    ]
  },
  {
    objectiveNumber: 4.4,
    bullets: [
      {
        "title": "• Common symptoms",
        "subBullets": [
          "- Signal drop/weak signal",
          "- Power drain ",
          "- Slow data speeds",
          "- Unintended WiFi connection",
          "- Unintended Bluetooth pairing",
          "- Leaked personal files/data",
          "- Data transmission overlimit",
          "- Unauthorized account access",
          "- Unauthorized root access",
          "- Unauthorized location tracking",
          "- Unauthorized activation",
          "- High resource utilization"
        ]
      },
      {
        "title": "• Tools",
        "subBullets": [
          "- Anti-malware ",
          "- App scanner",
          "- Factory reset/clean install",
          "- Uninstall/reinstall apps",
          "- WiFi analyzer",
          "- Force stop",
          "- Cell tower analyzer",
          "- Backup/restore",
          "- iTunes/iCloud/Apple Configurator",
          "- Google Sync",
          "- One Drive "
        ]
      }
    ]
  }
];

/**
 * DOMAIN: 5.0 Procedures
 */
const DOMAIN_FIVE: Bullet[] = [
  {
    objectiveNumber: 5.1,
    bullets: [
      {
        "title": "• Equipment grounding",
        "subBullets": []
      },
      {
        "title": "• Proper handling and storage",
        "subBullets": [
          "- Antistatic bags",
          "- ESD straps",
          "- ESD mats",
          "- Self-grounding"
        ]
      },
      {
        "title": "• Toxic waste handling",
        "subBullets": [
          "- Batteries",
          "- Toner",
          "- CRT"
        ]
      },
      {
        "title": "• Personal safety",
        "subBullets": [
          "- Disconnect power before repair",
          "- Remove jewelry",
          "- Lifting techniques",
          "- Weight limitations",
          "- Electrical fire safety",
          "- Cable management",
          "- Safety goggles",
          "- Air filter mask"
        ]
      },
      {
        "title": "• Compliance/government regulations",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 5.2,
    bullets: [
      {
        "title": "• MSDS documentation",
        "subBullets": []
      },
      {
        "title": "• Temperature",
        "subBullets": []
      },
      {
        "title": "• Humidity level",
        "subBullets": []
      },
      {
        "title": "• Proper ventilation",
        "subBullets": []
      },
      {
        "title": "• Power surges, brownouts, blackouts",
        "subBullets": [
          "- Battery backup ",
          "- Surge suppressor"
        ]
      },
      {
        "title": "• Protection from airborne particles",
        "subBullets": [
          "- Enclosures",
          "- Air filters/mask"
        ]
      },
      {
        "title": "• Dust and debris",
        "subBullets": [
          "- Compressed air",
          "- Vacuums"
        ]
      },
      {
        "title": "• Compliance/government regulations",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 5.3,
    bullets: [
      {
        "title": "• Incident response",
        "subBullets": [
          "- First response",
          "- Identify",
          "- Report through proper channels",
          "- Data/device preservation",
          "- Use of documentation",
          "- Documentation changes",
          "- Chain of custody",
          "- Tracking of evidence ",
          "- Documenting process"
        ]
      },
      {
        "title": "• Licensing/DRM/EULA",
        "subBullets": [
          "- Open vs. commercial license",
          "- Personal vs. enterprise licenses"
        ]
      },
      {
        "title": "• Personally identifiable information",
        "subBullets": []
      },
      {
        "title": "• Follow corporate end-user policies",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 5.4,
    bullets: [
      {
        "title": "• Use proper language",
        "subBullets": [
          "- Avoid jargon/slang when applicable"
        ]
      },
      {
        "title": "• Maintain a positive attitude",
        "subBullets": [
          "- Project confidence"
        ]
      },
      {
        "title": "• Actively listen",
        "subBullets": [
          "- Avoid interrupting the customer"
        ]
      },
      {
        "title": "• Be culturally sensitive",
        "subBullets": [
          "- Use appropriate professional"
        ]
      },
      {
        "title": "• Be on time",
        "subBullets": [
          "- if late contact the customer"
        ]
      },
      {
        "title": "• Avoid distractions",
        "subBullets": [
          "- Personal calls",
          "- Texting/social media sites",
          "- Personal interruptions"
        ]
      },
      {
        "title": "• Deal with difficult customer or situation",
        "subBullets": [
          "- Do not argue with customers ",
          "- Don't be defensive",
          "- Avoid dismissing customer problems",
          "- Avoid being judgmental",
          "- Clarify customer statements",
          "- Do not disclose experiences (social media)"
        ]
      },
      {
        "title": "• Set and meet expectations",
        "subBullets": [
          "- Timeline and communicate status",
          "- Offer repair/replacement options",
          "- Provide proper documentation"
        ]
      },
      {
        "title": "• Follow up with customer/user",
        "subBullets": [
          "- Verify satisfaction"
        ]
      },
      {
        "title": "• Deal appropriately with private materials",
        "subBullets": []
      }
    ]
  },
  {
    objectiveNumber: 5.5,
    bullets: [
      {
        "title": "• Always consider corporate policies",
        "subBullets": []
      },
      {
        "title": "• Consider impacts before implementing changes",
        "subBullets": []
      },
      {
        "title": "• Identify the problem",
        "subBullets": [
          "- Question the user",
          "- Identify user changes",
          "- Perform backups"
        ]
      },
      {
        "title": "• Establish a theory of probable cause",
        "subBullets": [
          "- Question the obvious",
          "- External/internal research "
        ]
      },
      {
        "title": "• Test the theory to determine cause",
        "subBullets": [
          "- Confirm theory",
          "- Determine next steps",
          "- Re-establish new theory if necessary",
          "- Escalate"
        ]
      },
      {
        "title": "• Establish a plan of action to resolve the problem",
        "subBullets": []
      },
      {
        "title": "• Verify full system functionality",
        "subBullets": [
          "- Implement preventive measures"
        ]
      },
      {
        "title": "• Document findings, actions and outcomes",
        "subBullets": []
      }
    ]
  }
];

export const BULLETS: Bullet[] = [
  ...DOMAIN_ONE, ...DOMAIN_TWO,
  ...DOMAIN_THREE, ...DOMAIN_FOUR,
  ...DOMAIN_FIVE
];


