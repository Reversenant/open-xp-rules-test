{
    "action": "execute",
    "category.generic": "Command",
    "category.high": "System Management",
    "category.low": "Manipulation",
    "chain_id": "190",
    "datafield8": "5.1.14393.0",
    "event_src.category": "Operating system",
    "event_src.fqdn": "server16.server16.int",
    "event_src.hostname": "server16",
    "event_src.subsys": "Microsoft-Windows-PowerShell/Operational",
    "event_src.title": "windows",
    "event_src.vendor": "microsoft",
    "id": "PT_Microsoft_Windows_eventlog_Common_PowerShell_4103_pipeline_executed",
    "importance": "info",
    "msgid": "4103",
    "object": "command",
    "object.account.domain": "server160",
    "object.account.id": "S-1-5-21-3500636268-2529342812-1271244175-500",
    "object.account.name": "administrator",
    "object.process.cmdline": "\"Get-Process\" -FileVersionInfo \"True\" -Name \"lsass\" | \"findstr.exe\"",
    "object.process.name": "Get-Process",
    "object.process.parent.cmdline": "c:\\windows\\system32\\windowspowershell\\v1.0\\powershell.exe",
    "object.process.parent.guid": "ff553896-ebd7-4e6c-b3ac-2fc878ac2224",
    "object.process.parent.id": "2160",
    "object.value": "CommandInvocation(Get-Process): \"Get-Process\"\r\nParameterBinding(Get-Process): name=\"FileVersionInfo\"; value=\"True\"\r\nParameterBinding(Get-Process): name=\"Name\"; value=\"lsass\"\r\nCommandInvocation(findstr.exe): \"findstr.exe\"",
    "status": "success",
    "subject": "account",
    "subject.account.domain": "server160",
    "subject.account.id": "S-1-5-21-3500636268-2529342812-1271244175-500",
    "subject.account.name": "administrator",
    "time": "2019-12-25T06:39:59.783Z"
}
