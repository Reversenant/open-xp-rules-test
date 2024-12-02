type: 1
name: Auto_Elevated_Binary
fillType: Registry
userCanEditContent: true
fields:
  - complex_key:
      index: false
      nullable: false
      primaryKey: true
      type: composite
      unique: true
      compositeFields:
        - name
        - path
  - name:
      type: String
      primaryKey: false
      index: false
      nullable: false
      unique: false
  - path:
      type: String
      primaryKey: false
      index: true
      nullable: false
      unique: false
  - description:
      type: String
      primaryKey: false
      index: false
      nullable: true
      unique: false
defaults:
  LOC:
    - name: eventvwr.exe
      path: C:\Windows\System32\eventvwr.exe
      description: Оснастка Просмотр событий
    - name: perfmon.exe
      path: C:\Windows\System32\perfmon.exe
      description: Оснастка Системный монитор
