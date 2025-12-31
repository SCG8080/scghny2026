import {
    Users,
    Bug,
    Code2,
    Smartphone,
    Database,
    Workflow,
    Cloud,
    Headset,
    Bot,
    Globe
} from 'lucide-react';

export const teams = [
    {
        name: "Recruitment Team",
        role: "Talent Acquisition",
        Icon: Users,
        code: "SELECT * FROM Candidates \nWHERE Skill = 'Awesome' \nAND Year = '2026';",
        description: "Finding the best humans for the best year yet. Happy 2026!"
    },
    {
        name: "QA Team",
        role: "Quality Assurance",
        Icon: Bug,
        code: "assert(2026.isBugFree());\n// 0 Defects Found\n// Ready for Production",
        description: "May your test cases pass and your coffee be strong. Happy New Year!"
    },
    {
        name: "Blazor Web Dev",
        role: "Front-end Engineering",
        Icon: Code2,
        code: "@code {\n  string Year = \"2026\";\n  bool Success = true;\n  void OnInit() => Party();\n}",
        description: "Rendering happiness on the server and client side."
    },
    {
        name: "Expo Mobile Dev",
        role: "Mobile Engineering",
        Icon: Smartphone,
        code: "const year = 2026;\nPlatform.select({\n  ios: 'Great',\n  android: 'Superb'\n});",
        description: "Building native success for every device. Happy 2026!"
    },
    {
        name: "EDW Team",
        role: "Data Engineering (SQL)",
        Icon: Database,
        code: "DROP TABLE 2025;\nCOMMIT;\n-- Transaction Complete\n-- New Year Loaded",
        description: "Migrating to a year of pure insights and zero latency."
    },
    {
        name: "Power Platform",
        role: "Dynamics 365",
        Icon: Workflow,
        code: "If(Year = 2026, \n  Notify('Success', Success),\n  Retry()\n)",
        description: "Automating joy and integrating success."
    },
    {
        name: "Azure Team",
        role: "Cloud Infrastructure",
        Icon: Cloud,
        code: "az group create --name 2026\n--location 'Cloud9'\n--tags status=happy",
        description: "Scaling our dreams to the cloud. 99.99% happiness guarantee."
    },
    {
        name: "ServiceNow Team",
        role: "IT Service Management",
        Icon: Headset,
        code: "current.state = 3; // Closed Complete\ncurrent.year = 2026;\ncurrent.update();",
        description: "Ticket resolved: 'Need a great year'. Status: Closed Complete."
    },
    {
        name: "UI Path RPA",
        role: "Automation",
        Icon: Bot,
        code: "Sequence {\n  TypeInto(\"2026\");\n  Click(\"Celebrate\");\n}",
        description: "Robots are taking over... the party planning! Beep boop happy new year."
    },
    {
        name: "SiteCore Team",
        role: "Content Management",
        Icon: Globe,
        code: "Publishing.Publish(\n  target: \"Web\",\n  year: \"2026\",\n  mode: Smart\n);",
        description: "Content delivered successfully. Personalizing your 2026 experience."
    }
];
