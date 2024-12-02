{
  "action": "rename",
  "object": "file_object",
  "status": "success",
  "category.generic": "File System Object",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "5120",
  "datafield1": "packer",
  "datafield2": "gitlab-runner",
  "datafield3": "0644",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.128.13",
  "event_src.rule": "pt_siem_home_modify",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_resource_rename",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "renameat",
  "numfield2": 1066,
  "object.account.group": "gitlab-runner",
  "object.account.id": "1066",
  "object.account.name": "gitlab-runner",
  "object.fullpath": "/home/gitlab-runner/builds/3yNj9zKj/0/oavdeev/packer/builds/windows/win2019_yc/../../../../disk/output/packer-win2019std.convert",
  "object.id": "2622031",
  "object.name": "packer-win2019std.convert",
  "object.new_value": "/home/gitlab-runner/builds/3yNj9zKj/0/oavdeev/packer/builds/windows/win2019_yc/../../../../disk/output/packer-win2019std",
  "object.path": "/home/gitlab-runner/builds/3yNj9zKj/0/oavdeev/packer/builds/windows/win2019_yc/../../../../disk/output/",
  "object.property": "fullpath",
  "object.type": "regular_file",
  "subject.account.id": "1066",
  "subject.account.name": "gitlab-runner",
  "subject.account.privileges": "1066",
  "subject.account.session_id": "4294967295",
  "subject.process.cwd": "/home/gitlab-runner/builds/3yNj9zKj/0/oavdeev/packer/builds/windows/win2019_yc",
  "subject.process.fullpath": "/usr/local/bin/packer",
  "subject.process.id": "1172",
  "subject.process.meta": "/usr/local/bin/packer plugin packer-builder-qemu",
  "subject.process.name": "packer",
  "subject.process.parent.id": "1147",
  "subject.process.path": "/usr/local/bin/",
  "time": "2023-05-12T18:05:30.000Z"
}