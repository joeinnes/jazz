# jazz-run

## 0.16.1

### Patch Changes

- Updated dependencies [c62abef]
  - jazz-tools@0.16.1
  - cojson@0.16.1
  - cojson-storage-sqlite@0.16.1
  - cojson-transport-ws@0.16.1

## 0.16.0

### Patch Changes

- 2bbb07b: Introduce a cleaner separation between Zod and CoValue schemas:
  - Zod schemas and CoValue schemas are fully separated. Zod schemas can only be composed with other Zod schemas. CoValue schemas can be composed with either Zod or other CoValue schemas.
  - `z.optional()` and `z.discriminatedUnion()` no longer work with CoValue schemas. Use `co.optional()` and `co.discriminatedUnion()` instead.
  - Internal schema access is now simpler. You no longer need to use Zod’s `.def` to access internals. Use properties like `CoMapSchema.shape`, `CoListSchema.element`, and `CoOptionalSchema.innerType` directly.
  - CoValue schema types are now namespaced under `co.`. Non-namespaced exports have been removed
  - CoMap schemas no longer incorrectly inherit from Zod. Previously, methods like `.extend()` and `.partial()` appeared available but could cause unexpected behavior. These methods are now disabled. In their place, `.optional()` has been added, and more Zod-like methods will be introduced in future releases.
  - Upgraded Zod from `3.25.28` to `3.25.76`.
  - Removed deprecated `withHelpers` method from CoValue schemas
  - Removed deprecated `createCoValueObservable` function
- Updated dependencies [c09dcdf]
- Updated dependencies [2bbb07b]
  - jazz-tools@0.16.0
  - cojson@0.16.0
  - cojson-storage-sqlite@0.16.0
  - cojson-transport-ws@0.16.0

## 0.15.16

### Patch Changes

- Updated dependencies [9633d01]
- Updated dependencies [4beafb7]
  - jazz-tools@0.15.16
  - cojson@0.15.16
  - cojson-storage-sqlite@0.15.16
  - cojson-transport-ws@0.15.16

## 0.15.15

### Patch Changes

- Updated dependencies [3fe53a3]
  - jazz-tools@0.15.15
  - cojson@0.15.15
  - cojson-storage-sqlite@0.15.15
  - cojson-transport-ws@0.15.15

## 0.15.14

### Patch Changes

- Updated dependencies [70ce7c5]
- Updated dependencies [a584590]
- Updated dependencies [9acccb5]
  - cojson-transport-ws@0.15.14
  - cojson@0.15.14
  - jazz-tools@0.15.14
  - cojson-storage-sqlite@0.15.14

## 0.15.13

### Patch Changes

- Updated dependencies [6c76ff8]
  - jazz-tools@0.15.13
  - cojson@0.15.13
  - cojson-storage-sqlite@0.15.13
  - cojson-transport-ws@0.15.13

## 0.15.12

### Patch Changes

- Updated dependencies [d1c1b0c]
- Updated dependencies [cf4ad72]
  - jazz-tools@0.15.12
  - cojson@0.15.12
  - cojson-storage-sqlite@0.15.12
  - cojson-transport-ws@0.15.12

## 0.15.11

### Patch Changes

- Updated dependencies [bdc9aee]
  - jazz-tools@0.15.11
  - cojson@0.15.11
  - cojson-storage-sqlite@0.15.11
  - cojson-transport-ws@0.15.11

## 0.15.10

### Patch Changes

- Updated dependencies [9815ec6]
- Updated dependencies [b4fdab4]
  - jazz-tools@0.15.10
  - cojson@0.15.10
  - cojson-storage-sqlite@0.15.10
  - cojson-transport-ws@0.15.10

## 0.15.9

### Patch Changes

- Updated dependencies [27b4837]
- Updated dependencies [2776263]
  - jazz-tools@0.15.9
  - cojson@0.15.9
  - cojson-storage-sqlite@0.15.9
  - cojson-transport-ws@0.15.9

## 0.15.8

### Patch Changes

- Updated dependencies [3844666]
  - jazz-tools@0.15.8
  - cojson@0.15.8
  - cojson-storage-sqlite@0.15.8
  - cojson-transport-ws@0.15.8

## 0.15.7

### Patch Changes

- Updated dependencies [c09b636]
  - jazz-tools@0.15.7
  - cojson@0.15.7
  - cojson-storage-sqlite@0.15.7
  - cojson-transport-ws@0.15.7

## 0.15.6

### Patch Changes

- Updated dependencies [a5ceaff]
  - jazz-tools@0.15.6
  - cojson@0.15.6
  - cojson-storage-sqlite@0.15.6
  - cojson-transport-ws@0.15.6

## 0.15.5

### Patch Changes

- Updated dependencies [23bfea5]
- Updated dependencies [e4ba23c]
- Updated dependencies [4b89838]
  - jazz-tools@0.15.5
  - cojson@0.15.5
  - cojson-storage-sqlite@0.15.5
  - cojson-transport-ws@0.15.5

## 0.15.4

### Patch Changes

- Updated dependencies [277e4d4]
  - cojson@0.15.4
  - cojson-storage-sqlite@0.15.4
  - cojson-transport-ws@0.15.4
  - jazz-tools@0.15.4

## 0.15.3

### Patch Changes

- Updated dependencies [45f73a7]
  - jazz-tools@0.15.3
  - cojson@0.15.3
  - cojson-storage-sqlite@0.15.3
  - cojson-transport-ws@0.15.3

## 0.15.2

### Patch Changes

- Updated dependencies [4b964ed]
- Updated dependencies [0e7e532]
  - cojson@0.15.2
  - jazz-tools@0.15.2
  - cojson-storage-sqlite@0.15.2
  - cojson-transport-ws@0.15.2

## 0.15.1

### Patch Changes

- Updated dependencies [0e3a4d2]
- Updated dependencies [b110f00]
  - jazz-tools@0.15.1
  - cojson@0.15.1
  - cojson-storage-sqlite@0.15.1
  - cojson-transport-ws@0.15.1

## 0.15.0

### Patch Changes

- Updated dependencies [1378a1f]
- Updated dependencies [0fa051a]
  - jazz-tools@0.15.0
  - cojson@0.15.0
  - cojson-storage-sqlite@0.15.0
  - cojson-transport-ws@0.15.0

## 0.14.28

### Patch Changes

- Updated dependencies [06c5a1c]
  - jazz-tools@0.14.28
  - cojson@0.14.28
  - cojson-storage-sqlite@0.14.28
  - cojson-transport-ws@0.14.28

## 0.14.27

### Patch Changes

- Updated dependencies [a026073]
  - jazz-tools@0.14.27
  - cojson@0.14.27
  - cojson-storage-sqlite@0.14.27
  - cojson-transport-ws@0.14.27

## 0.14.26

### Patch Changes

- Updated dependencies [e74a077]
  - cojson@0.14.26
  - cojson-storage-sqlite@0.14.26
  - cojson-transport-ws@0.14.26
  - jazz-tools@0.14.26

## 0.14.25

### Patch Changes

- Updated dependencies [99a2d9b]
  - jazz-tools@0.14.25
  - cojson@0.14.25
  - cojson-storage-sqlite@0.14.25
  - cojson-transport-ws@0.14.25

## 0.14.24

### Patch Changes

- cojson@0.14.24
- cojson-storage-sqlite@0.14.24
- cojson-transport-ws@0.14.24
- jazz-tools@0.14.24

## 0.14.23

### Patch Changes

- Updated dependencies [1ca9299]
- Updated dependencies [9177579]
- Updated dependencies [5f42c97]
  - cojson@0.14.23
  - jazz-tools@0.14.23
  - cojson-storage-sqlite@0.14.23
  - cojson-transport-ws@0.14.23

## 0.14.22

### Patch Changes

- Updated dependencies [57fb69f]
- Updated dependencies [048ac1d]
  - cojson@0.14.22
  - jazz-tools@0.14.22
  - cojson-storage-sqlite@0.14.22
  - cojson-transport-ws@0.14.22

## 0.14.21

### Patch Changes

- Updated dependencies [e7e505e]
- Updated dependencies [c3d8779]
- Updated dependencies [13b57aa]
- Updated dependencies [5662faa]
- Updated dependencies [2116a59]
  - jazz-tools@0.14.21
  - cojson@0.14.21
  - cojson-storage-sqlite@0.14.21
  - cojson-transport-ws@0.14.21

## 0.14.20

### Patch Changes

- Updated dependencies [6f72419]
- Updated dependencies [04b20c2]
  - jazz-tools@0.14.20
  - cojson@0.14.20
  - cojson-storage-sqlite@0.14.20
  - cojson-transport-ws@0.14.20

## 0.14.19

### Patch Changes

- cojson@0.14.19
- cojson-storage-sqlite@0.14.19
- cojson-transport-ws@0.14.19
- jazz-tools@0.14.19

## 0.14.18

### Patch Changes

- Updated dependencies [4b950bc]
- Updated dependencies [0d5ee3e]
- Updated dependencies [d6d9c0a]
- Updated dependencies [c559054]
  - jazz-tools@0.14.18
  - cojson@0.14.18
  - cojson-storage-sqlite@0.14.18
  - cojson-transport-ws@0.14.18

## 0.14.17

### Patch Changes

- Updated dependencies [e512df4]
  - jazz-tools@0.14.17

## 0.14.16

### Patch Changes

- Updated dependencies [5e253cc]
  - cojson@0.14.16
  - cojson-storage-sqlite@0.14.16
  - cojson-transport-ws@0.14.16
  - jazz-tools@0.14.16

## 0.14.15

### Patch Changes

- Updated dependencies [23daa7c]
  - cojson@0.14.15
  - cojson-storage-sqlite@0.14.15
  - cojson-transport-ws@0.14.15
  - jazz-tools@0.14.15

## 0.14.14

### Patch Changes

- Updated dependencies [e32a1f7]
  - jazz-tools@0.14.14

## 0.14.10

### Patch Changes

- Updated dependencies [dc746a2]
- Updated dependencies [f869d9a]
- Updated dependencies [3fe6832]
  - jazz-tools@0.14.10

## 0.14.9

### Patch Changes

- Updated dependencies [22c2600]
  - jazz-tools@0.14.9

## 0.14.8

### Patch Changes

- Updated dependencies [637ae13]
  - jazz-tools@0.14.8

## 0.14.7

### Patch Changes

- Updated dependencies [365b0ea]
  - jazz-tools@0.14.7

## 0.14.6

### Patch Changes

- Updated dependencies [9d6d9fe]
- Updated dependencies [9d6d9fe]
  - jazz-tools@0.14.6

## 0.14.5

### Patch Changes

- Updated dependencies [91cbb2f]
- Updated dependencies [20b3d88]
  - jazz-tools@0.14.5

## 0.14.4

### Patch Changes

- Updated dependencies [011af55]
  - jazz-tools@0.14.4

## 0.14.2

### Patch Changes

- Updated dependencies [3d1027f]
- Updated dependencies [c240eed]
  - jazz-tools@0.14.2

## 0.14.1

### Patch Changes

- Updated dependencies [c8b33ad]
- Updated dependencies [cdfc105]
  - cojson@0.14.1
  - jazz-tools@0.14.1
  - cojson-storage-sqlite@0.14.1
  - cojson-transport-ws@0.14.1

## 0.14.0

### Patch Changes

- Updated dependencies [5835ed1]
- Updated dependencies [5835ed1]
  - cojson@0.14.0
  - jazz-tools@0.14.0
  - cojson-storage-sqlite@0.14.0
  - cojson-transport-ws@0.14.0

## 0.13.32

### Patch Changes

- cojson-storage-sqlite@0.13.32

## 0.13.31

### Patch Changes

- Updated dependencies [e5b170f]
- Updated dependencies [d63716a]
- Updated dependencies [d5edad7]
  - jazz-tools@0.13.31
  - cojson@0.13.31
  - cojson-storage-sqlite@0.13.31
  - cojson-transport-ws@0.13.31

## 0.13.30

### Patch Changes

- Updated dependencies [07dd2c5]
  - cojson@0.13.30
  - cojson-storage-sqlite@0.13.30
  - cojson-transport-ws@0.13.30
  - jazz-tools@0.13.30

## 0.13.29

### Patch Changes

- Updated dependencies [91e0c09]
- Updated dependencies [eef1a5d]
- Updated dependencies [191ae38]
- Updated dependencies [daee7b9]
  - cojson-storage-sqlite@0.13.29
  - cojson@0.13.29
  - cojson-transport-ws@0.13.29
  - jazz-tools@0.13.29

## 0.13.28

### Patch Changes

- Updated dependencies [e7ccb2c]
- Updated dependencies [422dbc4]
  - cojson@0.13.28
  - cojson-transport-ws@0.13.28
  - cojson-storage-sqlite@0.13.28
  - jazz-tools@0.13.28

## 0.13.27

### Patch Changes

- Updated dependencies [6357052]
  - cojson@0.13.27
  - cojson-storage-sqlite@0.13.27
  - cojson-transport-ws@0.13.27
  - jazz-tools@0.13.27

## 0.13.26

### Patch Changes

- Updated dependencies [ff846d9]
  - jazz-tools@0.13.26

## 0.13.25

### Patch Changes

- Updated dependencies [a846e07]
  - cojson@0.13.25
  - cojson-storage-sqlite@0.13.25
  - cojson-transport-ws@0.13.25
  - jazz-tools@0.13.25

## 0.13.23

### Patch Changes

- Updated dependencies [6b781cf]
- Updated dependencies [02a240c]
  - cojson@0.13.23
  - jazz-tools@0.13.23
  - cojson-storage-sqlite@0.13.23
  - cojson-transport-ws@0.13.23

## 0.13.21

### Patch Changes

- Updated dependencies [e14e61f]
  - cojson@0.13.21
  - cojson-storage-sqlite@0.13.21
  - cojson-transport-ws@0.13.21
  - jazz-tools@0.13.21

## 0.13.20

### Patch Changes

- Updated dependencies [adfc9a6]
- Updated dependencies [1389207]
- Updated dependencies [d6e143e]
- Updated dependencies [439f0fe]
- Updated dependencies [3e6229d]
  - cojson@0.13.20
  - jazz-tools@0.13.20
  - cojson-storage-sqlite@0.13.20
  - cojson-transport-ws@0.13.20

## 0.13.19

### Patch Changes

- Updated dependencies [80530a4]
  - jazz-tools@0.13.19

## 0.13.18

### Patch Changes

- Updated dependencies [9089252]
- Updated dependencies [b470f63]
- Updated dependencies [761759c]
- Updated dependencies [66373ba]
- Updated dependencies [f24cad1]
  - cojson@0.13.18
  - jazz-tools@0.13.18
  - cojson-storage-sqlite@0.13.18
  - cojson-transport-ws@0.13.18

## 0.13.17

### Patch Changes

- Updated dependencies [9fb98e2]
- Updated dependencies [0b89fad]
  - cojson@0.13.17
  - cojson-storage-sqlite@0.13.17
  - cojson-transport-ws@0.13.17
  - jazz-tools@0.13.17

## 0.13.16

### Patch Changes

- Updated dependencies [c6fb8dc]
  - cojson@0.13.16
  - cojson-storage-sqlite@0.13.16
  - cojson-transport-ws@0.13.16
  - jazz-tools@0.13.16

## 0.13.15

### Patch Changes

- Updated dependencies [c712ef2]
  - cojson@0.13.15
  - cojson-storage-sqlite@0.13.15
  - cojson-transport-ws@0.13.15
  - jazz-tools@0.13.15

## 0.13.14

### Patch Changes

- Updated dependencies [5c2c7d4]
  - cojson@0.13.14
  - cojson-storage-sqlite@0.13.14
  - cojson-transport-ws@0.13.14
  - jazz-tools@0.13.14

## 0.13.13

### Patch Changes

- Updated dependencies [ec9cb40]
  - cojson@0.13.13
  - cojson-storage-sqlite@0.13.13
  - cojson-transport-ws@0.13.13
  - jazz-tools@0.13.13

## 0.13.12

### Patch Changes

- Updated dependencies [4547525]
- Updated dependencies [65719f2]
  - jazz-tools@0.13.12
  - cojson@0.13.12
  - cojson-storage-sqlite@0.13.12
  - cojson-transport-ws@0.13.12

## 0.13.11

### Patch Changes

- Updated dependencies [17273a6]
- Updated dependencies [3396ed4]
- Updated dependencies [17273a6]
- Updated dependencies [267ea4c]
  - cojson@0.13.11
  - jazz-tools@0.13.11
  - cojson-storage-sqlite@0.13.11
  - cojson-transport-ws@0.13.11

## 0.13.10

### Patch Changes

- Updated dependencies [f837cfe]
  - cojson@0.13.10
  - cojson-storage-sqlite@0.13.10
  - cojson-transport-ws@0.13.10
  - jazz-tools@0.13.10

## 0.13.9

### Patch Changes

- Updated dependencies [a6cf01f]
  - jazz-tools@0.13.9

## 0.13.7

### Patch Changes

- Updated dependencies [bc3d7bb]
- Updated dependencies [4e9aae1]
- Updated dependencies [21c935c]
- Updated dependencies [aa1c80e]
- Updated dependencies [13074be]
  - jazz-tools@0.13.7
  - cojson@0.13.7
  - cojson-storage-sqlite@0.13.7
  - cojson-transport-ws@0.13.7

## 0.13.5

### Patch Changes

- Updated dependencies [e090b39]
- Updated dependencies [fe6f561]
  - cojson@0.13.5
  - jazz-tools@0.13.5
  - cojson-storage-sqlite@0.13.5
  - cojson-transport-ws@0.13.5

## 0.13.4

### Patch Changes

- Updated dependencies [3129982]
  - jazz-tools@0.13.4

## 0.13.3

### Patch Changes

- Updated dependencies [12f8bfa]
- Updated dependencies [b19cab7]
- Updated dependencies [bd57177]
  - jazz-tools@0.13.3
  - cojson-transport-ws@0.13.3

## 0.13.2

### Patch Changes

- Updated dependencies [c551839]
  - cojson@0.13.2
  - cojson-storage-sqlite@0.13.2
  - cojson-transport-ws@0.13.2
  - jazz-tools@0.13.2

## 0.13.0

### Patch Changes

- Updated dependencies [a013538]
- Updated dependencies [afd1374]
- Updated dependencies [bce3bcc]
  - cojson@0.13.0
  - jazz-tools@0.13.0
  - cojson-storage-sqlite@0.13.0
  - cojson-transport-ws@0.13.0

## 0.12.2

### Patch Changes

- Updated dependencies [c2f4827]
  - cojson@0.12.2
  - cojson-storage-sqlite@0.12.2
  - cojson-transport-ws@0.12.2
  - jazz-tools@0.12.2

## 0.12.1

### Patch Changes

- Updated dependencies [5a00fe0]
  - cojson@0.12.1
  - cojson-storage-sqlite@0.12.1
  - cojson-transport-ws@0.12.1
  - jazz-tools@0.12.1

## 0.12.0

### Patch Changes

- Updated dependencies [01523dc]
- Updated dependencies [4ea87dc]
- Updated dependencies [1e6da19]
- Updated dependencies [01523dc]
- Updated dependencies [b6c6a0a]
  - jazz-tools@0.12.0
  - cojson@0.12.0
  - cojson-storage-sqlite@0.12.0
  - cojson-transport-ws@0.12.0

## 0.11.8

### Patch Changes

- Updated dependencies [6c86c4f]
- Updated dependencies [9d0c9dc]
  - cojson@0.11.8
  - cojson-storage-sqlite@0.11.8
  - cojson-transport-ws@0.11.8
  - jazz-tools@0.11.8

## 0.11.7

### Patch Changes

- Updated dependencies [a140f55]
- Updated dependencies [2b94bc8]
- Updated dependencies [2957362]
- Updated dependencies [2b0d1b0]
  - jazz-tools@0.11.7
  - cojson@0.11.7
  - cojson-storage-sqlite@0.11.7
  - cojson-transport-ws@0.11.7

## 0.11.6

### Patch Changes

- Updated dependencies [e7c85b7]
- Updated dependencies [8ed144e]
  - jazz-tools@0.11.6
  - cojson@0.11.6
  - cojson-storage-sqlite@0.11.6
  - cojson-transport-ws@0.11.6

## 0.11.5

### Patch Changes

- Updated dependencies [60f5b3f]
  - cojson@0.11.5
  - cojson-storage-sqlite@0.11.5
  - cojson-transport-ws@0.11.5
  - jazz-tools@0.11.5

## 0.11.4

### Patch Changes

- Updated dependencies [57a3dbe]
- Updated dependencies [a717754]
- Updated dependencies [a91f343]
- Updated dependencies [7f036c1]
  - jazz-tools@0.11.4
  - cojson@0.11.4
  - cojson-storage-sqlite@0.11.4
  - cojson-transport-ws@0.11.4

## 0.11.3

### Patch Changes

- Updated dependencies [68b0242]
  - cojson-storage-sqlite@0.11.3
  - cojson-transport-ws@0.11.3
  - cojson@0.11.3
  - jazz-tools@0.11.3

## 0.11.2

### Patch Changes

- Updated dependencies [6892dc6]
  - jazz-tools@0.11.2

## 0.11.0

### Patch Changes

- a4713df: Moving to the d.ts files for the exported type definitions
- Updated dependencies [6a96d8b]
- Updated dependencies [a35249a]
- Updated dependencies [b9d194a]
- Updated dependencies [b9d194a]
- Updated dependencies [a4713df]
- Updated dependencies [e22de9f]
- Updated dependencies [34cbdc3]
- Updated dependencies [0f67e0a]
- Updated dependencies [f039e8f]
- Updated dependencies [e22de9f]
  - jazz-tools@0.11.0
  - cojson@0.11.0
  - cojson-storage-sqlite@0.11.0
  - cojson-transport-ws@0.11.0

## 0.10.15

### Patch Changes

- Updated dependencies [2f99de0]
- Updated dependencies [f86e278]
  - jazz-tools@0.10.15
  - cojson@0.10.15
  - cojson-storage-sqlite@0.10.15
  - cojson-transport-ws@0.10.15

## 0.10.14

### Patch Changes

- Updated dependencies [75211e3]
  - jazz-tools@0.10.14

## 0.10.13

### Patch Changes

- Updated dependencies [07feedd]
  - jazz-tools@0.10.13

## 0.10.12

### Patch Changes

- Updated dependencies [4612e05]
  - jazz-tools@0.10.12

## 0.10.8

### Patch Changes

- Updated dependencies [153dc99]
- Updated dependencies [2fb6428]
  - cojson@0.10.8
  - jazz-tools@0.10.8
  - cojson-storage-sqlite@0.10.8
  - cojson-transport-ws@0.10.8

## 0.10.7

### Patch Changes

- Updated dependencies [0f83320]
- Updated dependencies [012022d]
- Updated dependencies [1136d9b]
- Updated dependencies [1e625f3]
- Updated dependencies [0eed228]
  - cojson@0.10.7
  - jazz-tools@0.10.7
  - cojson-storage-sqlite@0.10.7
  - cojson-transport-ws@0.10.7

## 0.10.6

### Patch Changes

- Updated dependencies [5c76e37]
- Updated dependencies [ada802b]
  - cojson@0.10.6
  - jazz-tools@0.10.6
  - cojson-storage-sqlite@0.10.6
  - cojson-transport-ws@0.10.6

## 0.10.5

### Patch Changes

- Updated dependencies [59ff77e]
  - jazz-tools@0.10.5

## 0.10.4

### Patch Changes

- Updated dependencies [1af6072]
  - cojson@0.10.4
  - cojson-storage-sqlite@0.10.4
  - cojson-transport-ws@0.10.4
  - jazz-tools@0.10.4

## 0.10.3

### Patch Changes

- Updated dependencies [d8582fc]
  - jazz-tools@0.10.3

## 0.10.2

### Patch Changes

- Updated dependencies [cae3a9e]
  - cojson@0.10.2
  - cojson-storage-sqlite@0.10.2
  - cojson-transport-ws@0.10.2
  - jazz-tools@0.10.2

## 0.10.1

### Patch Changes

- Updated dependencies [5a63cba]
- Updated dependencies [5a63cba]
  - jazz-tools@0.10.1
  - cojson@0.10.1
  - cojson-storage-sqlite@0.10.1
  - cojson-transport-ws@0.10.1

## 0.10.0

### Patch Changes

- Updated dependencies [b426342]
- Updated dependencies [498954f]
- Updated dependencies [8217981]
- Updated dependencies [d42c2aa]
- Updated dependencies [dd03464]
- Updated dependencies [b426342]
- Updated dependencies [ac3d9fa]
- Updated dependencies [610543c]
  - cojson@0.10.0
  - cojson-transport-ws@0.10.0
  - jazz-tools@0.10.0
  - cojson-storage-sqlite@0.10.0

## 0.9.23

### Patch Changes

- Updated dependencies [70c9a5d]
  - cojson@0.9.23
  - cojson-storage-sqlite@0.9.23
  - cojson-transport-ws@0.9.23
  - jazz-tools@0.9.23

## 0.9.22

### Patch Changes

- Updated dependencies [14b6149]
  - cojson-transport-ws@0.9.22

## 0.9.21

### Patch Changes

- Updated dependencies [1be017d]
  - jazz-tools@0.9.21

## 0.9.20

### Patch Changes

- Updated dependencies [b01cc1f]
  - jazz-tools@0.9.20

## 0.9.19

### Patch Changes

- Updated dependencies [6ad0a9f]
  - cojson@0.9.19
  - cojson-storage-sqlite@0.9.19
  - cojson-transport-ws@0.9.19
  - jazz-tools@0.9.19

## 0.9.18

### Patch Changes

- Updated dependencies [8898b10]
  - cojson@0.9.18
  - cojson-storage-sqlite@0.9.18
  - cojson-transport-ws@0.9.18
  - jazz-tools@0.9.18

## 0.9.17

### Patch Changes

- Updated dependencies [c2ca1fe]
- Updated dependencies [1227047]
  - jazz-tools@0.9.17

## 0.9.16

### Patch Changes

- Updated dependencies [24b3b6a]
  - jazz-tools@0.9.16

## 0.9.15

### Patch Changes

- Updated dependencies [7491711]
  - jazz-tools@0.9.15

## 0.9.14

### Patch Changes

- Updated dependencies [3df93cc]
  - jazz-tools@0.9.14

## 0.9.13

### Patch Changes

- Updated dependencies [8d29e50]
  - cojson-storage-sqlite@0.9.13
  - cojson-transport-ws@0.9.13
  - cojson@0.9.13
  - jazz-tools@0.9.13

## 0.9.12

### Patch Changes

- Updated dependencies [15d4b2a]
  - cojson-storage-sqlite@0.9.12
  - cojson-transport-ws@0.9.12
  - cojson@0.9.12
  - jazz-tools@0.9.12

## 0.9.11

### Patch Changes

- Updated dependencies [efbf3d8]
- Updated dependencies [5863bad]
  - cojson@0.9.11
  - cojson-storage-sqlite@0.9.11
  - cojson-transport-ws@0.9.11
  - jazz-tools@0.9.11

## 0.9.10

### Patch Changes

- Updated dependencies [4aa377d]
- Updated dependencies [5e83864]
  - cojson@0.9.10
  - jazz-tools@0.9.10
  - cojson-storage-sqlite@0.9.10
  - cojson-transport-ws@0.9.10

## 0.9.9

### Patch Changes

- Updated dependencies [8eb9247]
- Updated dependencies [8eb9247]
  - jazz-tools@0.9.9
  - cojson@0.9.9
  - cojson-storage-sqlite@0.9.9
  - cojson-transport-ws@0.9.9

## 0.9.8

### Patch Changes

- Updated dependencies [d1d773b]
  - jazz-tools@0.9.8

## 0.9.1

### Patch Changes

- Updated dependencies [1b71969]
  - jazz-tools@0.9.1

## 0.9.0

### Patch Changes

- Updated dependencies [8eda792]
- Updated dependencies [8eda792]
- Updated dependencies [1ef3226]
  - cojson@0.9.0
  - jazz-tools@0.9.0
  - cojson-storage-sqlite@0.9.0
  - cojson-transport-ws@0.9.0

## 0.8.51

### Patch Changes

- Updated dependencies [dc62b95]
- Updated dependencies [1de26f8]
  - jazz-tools@0.8.51

## 0.8.50

### Patch Changes

- Updated dependencies [43378ef]
  - cojson@0.8.50
  - cojson-storage-sqlite@0.8.50
  - cojson-transport-ws@0.8.50
  - jazz-tools@0.8.50

## 0.8.49

### Patch Changes

- Updated dependencies [25dfd90]
  - cojson@0.8.49
  - cojson-storage-sqlite@0.8.49
  - cojson-transport-ws@0.8.49
  - jazz-tools@0.8.49

## 0.8.48

### Patch Changes

- Updated dependencies [635e824]
- Updated dependencies [10ea733]
- Updated dependencies [0a85982]
  - jazz-tools@0.8.48
  - cojson@0.8.48
  - cojson-storage-sqlite@0.8.48
  - cojson-transport-ws@0.8.48

## 0.8.45

### Patch Changes

- 99e731d: Fix the --json option on the account create command
- Updated dependencies [6f0bd7f]
- Updated dependencies [fca6a0b]
- Updated dependencies [fa41f8e]
- Updated dependencies [88d7d9a]
- Updated dependencies [60e35ea]
  - cojson@0.8.45
  - jazz-tools@0.8.45
  - cojson-storage-sqlite@0.8.45
  - cojson-transport-ws@0.8.45

## 0.8.44

### Patch Changes

- Updated dependencies [5d20c81]
  - cojson@0.8.44
  - cojson-storage-sqlite@0.8.44
  - cojson-transport-ws@0.8.44
  - jazz-tools@0.8.44

## 0.8.41

### Patch Changes

- Updated dependencies [3252502]
- Updated dependencies [6370348]
- Updated dependencies [ac216b9]
  - cojson@0.8.41
  - cojson-storage-sqlite@0.8.41
  - cojson-transport-ws@0.8.41
  - jazz-tools@0.8.41

## 0.8.40

### Patch Changes

- cojson-storage-sqlite@0.8.40

## 0.8.39

### Patch Changes

- 96f844a: Make possible to use startSyncServer and createWorkerAccount via code
- 249eecb: Refactored to use the new waitForAllCoValuesSync API
- Updated dependencies [249eecb]
- Updated dependencies [3121551]
- Updated dependencies [ecc7c96]
  - jazz-tools@0.8.39
  - cojson@0.8.39
  - cojson-storage-sqlite@0.8.39
  - cojson-transport-ws@0.8.39

## 0.8.38

### Patch Changes

- 28930ee: Log the server address when running the local sync server
- Updated dependencies [da13eca]
- Updated dependencies [b00ee91]
- Updated dependencies [f488c09]
  - cojson-storage-sqlite@0.8.38
  - cojson@0.8.38
  - cojson-transport-ws@0.8.38
  - jazz-tools@0.8.38

## 0.8.37

### Patch Changes

- Updated dependencies [3d9f12e]
  - cojson@0.8.37
  - cojson-storage-sqlite@0.8.37
  - cojson-transport-ws@0.8.37
  - jazz-tools@0.8.37

## 0.8.36

### Patch Changes

- Updated dependencies [441fe27]
- Updated dependencies [1afbd2c]
  - cojson@0.8.36
  - jazz-tools@0.8.36
  - cojson-storage-sqlite@0.8.36
  - cojson-transport-ws@0.8.36

## 0.8.35

### Patch Changes

- Updated dependencies [3f15a23]
- Updated dependencies [46f2ab8]
- Updated dependencies [8b87117]
- Updated dependencies [a6b6ccf]
  - cojson@0.8.35
  - cojson-storage-sqlite@0.8.35
  - jazz-tools@0.8.35
  - cojson-transport-ws@0.8.35

## 0.8.34

### Patch Changes

- Updated dependencies [e4f110f]
  - cojson@0.8.34
  - cojson-storage-sqlite@0.8.34
  - cojson-transport-ws@0.8.34
  - jazz-tools@0.8.34

## 0.8.32

### Patch Changes

- 2e2a13f: Add --json option to output the account data as json
- Updated dependencies [df42b2b]
- Updated dependencies [df42b2b]
  - cojson@0.8.32
  - jazz-tools@0.8.32
  - cojson-storage-sqlite@0.8.32
  - cojson-transport-ws@0.8.32

## 0.8.31

### Patch Changes

- Updated dependencies [e511d6d]
  - cojson@0.8.31
  - cojson-storage-sqlite@0.8.31
  - cojson-transport-ws@0.8.31
  - jazz-tools@0.8.31

## 0.8.30

### Patch Changes

- Updated dependencies [0a2fae3]
- Updated dependencies [99cda2f]
  - cojson@0.8.30
  - cojson-storage-sqlite@0.8.30
  - cojson-transport-ws@0.8.30
  - jazz-tools@0.8.30

## 0.8.29

### Patch Changes

- Updated dependencies [dcc9c2e]
- Updated dependencies [699553f]
  - cojson-transport-ws@0.8.29
  - cojson@0.8.29
  - cojson-storage-sqlite@0.8.29
  - jazz-tools@0.8.29

## 0.8.28

### Patch Changes

- Updated dependencies [605734c]
  - cojson@0.8.28
  - cojson-storage-sqlite@0.8.28
  - cojson-transport-ws@0.8.28
  - jazz-tools@0.8.28

## 0.8.27

### Patch Changes

- Updated dependencies [75fdff4]
  - cojson@0.8.27
  - cojson-storage-sqlite@0.8.27
  - cojson-transport-ws@0.8.27
  - jazz-tools@0.8.27

## 0.8.25

### Patch Changes

- Updated dependencies [63d46c9]
  - cojson-storage-sqlite@0.8.25

## 0.8.23

### Patch Changes

- 124bf67: Enable the deletePeerStateOnClose on the Websocket peers
- Updated dependencies [6f745be]
- Updated dependencies [d348c2d]
- Updated dependencies [124bf67]
- Updated dependencies [6902b5b]
- Updated dependencies [1a0cd3d]
  - cojson@0.8.23
  - jazz-tools@0.8.23
  - cojson-transport-ws@0.8.23
  - cojson-storage-sqlite@0.8.23

## 0.8.21

### Patch Changes

- Updated dependencies [0f30eea]
- Updated dependencies [149ca97]
  - cojson@0.8.21
  - jazz-tools@0.8.21
  - cojson-storage-sqlite@0.8.21
  - cojson-transport-ws@0.8.21

## 0.8.19

### Patch Changes

- Updated dependencies [9c2aadb]
  - cojson@0.8.19
  - cojson-storage-sqlite@0.8.19
  - cojson-transport-ws@0.8.19
  - jazz-tools@0.8.19

## 0.8.18

### Patch Changes

- Updated dependencies [d4319d8]
  - cojson@0.8.18
  - cojson-storage-sqlite@0.8.18
  - cojson-transport-ws@0.8.18
  - jazz-tools@0.8.18

## 0.8.17

### Patch Changes

- d433cf4: Improve the sync wait using the new API from the sync manager
- Updated dependencies [d433cf4]
- Updated dependencies [b6162f0]
  - cojson@0.8.17
  - cojson-transport-ws@0.8.17
  - cojson-storage-sqlite@0.8.17
  - jazz-tools@0.8.17

## 0.8.16

### Patch Changes

- d4c8443: Create account - Added a timeout on the sync operation
- Updated dependencies [b934fab]
  - cojson@0.8.16
  - cojson-storage-sqlite@0.8.16
  - cojson-transport-ws@0.8.16
  - jazz-tools@0.8.16

## 0.8.15

### Patch Changes

- Updated dependencies [cce679b]
  - jazz-tools@0.8.15

## 0.8.14

### Patch Changes

- Updated dependencies [36273b3]
  - jazz-tools@0.8.14

## 0.8.13

### Patch Changes

- Updated dependencies [fd011d7]
- Updated dependencies [e0dd006]
  - jazz-tools@0.8.13
  - cojson-transport-ws@0.8.13

## 0.8.12

### Patch Changes

- Updated dependencies [6ed75eb]
  - cojson-storage-sqlite@0.8.12
  - cojson@0.8.12
  - cojson-transport-ws@0.8.12
  - jazz-tools@0.8.12

## 0.8.11

### Patch Changes

- 1ed4ab5: Improve the jazz-run create command by subscribing to the peer sync state
- Updated dependencies [1ed4ab5]
  - cojson@0.8.11
  - cojson-storage-sqlite@0.8.11
  - cojson-transport-ws@0.8.11
  - jazz-tools@0.8.11

## 0.8.10

### Patch Changes

- a818462: Temporary fix for account create

## 0.8.7

### Patch Changes

- Updated dependencies [e82cf3d]
  - cojson-transport-ws@0.8.7

## 0.8.6

### Patch Changes

- 5542fdb: Added batching to the WebSocket messsages
- Updated dependencies [5542fdb]
  - cojson-transport-ws@0.8.6

## 0.8.5

### Patch Changes

- Updated dependencies [c3f4e6b]
- Updated dependencies [d9152ed]
  - jazz-tools@0.8.5
  - cojson@0.8.5
  - cojson-storage-sqlite@0.8.5
  - cojson-transport-ws@0.8.5

## 0.8.4

### Patch Changes

- 561924f: fix broken import from jazz-run

## 0.8.3

### Patch Changes

- Updated dependencies
  - cojson@0.8.3
  - cojson-storage-sqlite@0.8.3
  - cojson-transport-ws@0.8.3
  - jazz-tools@0.8.3

## 0.8.2

### Patch Changes

- Updated dependencies [a075f90]
  - jazz-tools@0.8.2

## 0.8.1

### Patch Changes

- Expose randomSessionProvider and fix jazz-run
- Updated dependencies
  - jazz-tools@0.8.1

## 0.8.0

### Patch Changes

- Updated dependencies [6a147c2]
- Updated dependencies [ad40b88]
- Updated dependencies [23369dc]
- Updated dependencies [c2b62a0]
- Updated dependencies [1a979b6]
- Updated dependencies [bcec3be]
  - cojson@0.8.0
  - jazz-tools@0.8.0
  - cojson-storage-sqlite@0.8.0
  - cojson-transport-ws@0.8.0

## 0.7.35-guest-auth.6

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.35-guest-auth.6

## 0.7.35

### Patch Changes

- 403b430: Added sync command to start a local sync server
- f350e90: Added a priority system for the sync messages
- Updated dependencies [49a8b54]
- Updated dependencies [35bbcd9]
- Updated dependencies [6f80282]
- Updated dependencies [35bbcd9]
- Updated dependencies [f350e90]
  - jazz-tools@0.7.35
  - cojson@0.7.35
  - cojson-storage-sqlite@0.7.35
  - cojson-transport-ws@0.7.35

## 0.7.34

### Patch Changes

- 1232c02: Hack to make jazz-run account create work
- 2c3a40c: Use fork of queueable
- 0d8175b: Fix deps even more
- 032f69f: Fix peer deps
- 4e16575: Use queueable fork
- Updated dependencies [5d91f9f]
- Updated dependencies [5094e6d]
- Updated dependencies [b09589b]
- Updated dependencies [2c3a40c]
- Updated dependencies [406ab9b]
- Updated dependencies [4e16575]
- Updated dependencies [ea882ab]
  - cojson@0.7.34
  - cojson-transport-ws@0.7.34
  - jazz-tools@0.7.34

## 0.7.34-neverthrow.8

### Patch Changes

- Use queueable fork
- Updated dependencies
  - cojson@0.7.34-neverthrow.8
  - cojson-transport-ws@0.7.34-neverthrow.8
  - jazz-tools@0.7.34-neverthrow.8

## 0.7.34-neverthrow.7

### Patch Changes

- Use fork of queueable
- Updated dependencies
  - cojson@0.7.34-neverthrow.7
  - cojson-transport-ws@0.7.34-neverthrow.7
  - jazz-tools@0.7.34-neverthrow.7

## 0.7.34-neverthrow.6

### Patch Changes

- Fix deps even more

## 0.7.34-neverthrow.6

### Patch Changes

- Fix peer deps

## 0.7.34-neverthrow.5

### Patch Changes

- Hack to make jazz-run account create work

## 0.7.34-neverthrow.4

### Patch Changes

- Updated dependencies
  - cojson@0.7.34-neverthrow.4
  - cojson-transport-ws@0.7.34-neverthrow.4
  - jazz-tools@0.7.34-neverthrow.4

## 0.7.34-neverthrow.3

### Patch Changes

- Updated dependencies
  - cojson@0.7.34-neverthrow.3
  - cojson-transport-ws@0.7.34-neverthrow.3
  - jazz-tools@0.7.34-neverthrow.3

## 0.7.34-neverthrow.2

### Patch Changes

- Updated dependencies
  - cojson-transport-ws@0.7.34-neverthrow.2

## 0.7.34-neverthrow.1

### Patch Changes

- Updated dependencies
  - cojson@0.7.34-neverthrow.1
  - cojson-transport-ws@0.7.34-neverthrow.1
  - jazz-tools@0.7.34-neverthrow.1

## 0.7.34-neverthrow.0

### Patch Changes

- Updated dependencies
  - cojson@0.7.34-neverthrow.0
  - cojson-transport-ws@0.7.34-neverthrow.0
  - jazz-tools@0.7.34-neverthrow.0

## 0.7.33

### Patch Changes

- Updated dependencies [fdde8db]
- Updated dependencies [b297c93]
- Updated dependencies [07fe2b9]
- Updated dependencies [3bf5127]
- Updated dependencies [a8b74ff]
- Updated dependencies [db53161]
  - cojson-transport-ws@0.7.33
  - cojson@0.7.33
  - jazz-tools@0.7.33

## 0.7.33-hotfixes.5

### Patch Changes

- Updated dependencies
  - cojson@0.7.33-hotfixes.5
  - cojson-transport-ws@0.7.33-hotfixes.5
  - jazz-tools@0.7.33-hotfixes.5

## 0.7.33-hotfixes.4

### Patch Changes

- Updated dependencies
  - cojson@0.7.33-hotfixes.4
  - cojson-transport-ws@0.7.33-hotfixes.4
  - jazz-tools@0.7.33-hotfixes.4

## 0.7.33-hotfixes.3

### Patch Changes

- Updated dependencies
  - cojson-transport-ws@0.7.33-hotfixes.3
  - cojson@0.7.33-hotfixes.3
  - jazz-tools@0.7.33-hotfixes.3

## 0.7.33-hotfixes.2

### Patch Changes

- Updated dependencies
  - cojson-transport-ws@0.7.33-hotfixes.2

## 0.7.33-hotfixes.1

### Patch Changes

- Updated dependencies
  - cojson-transport-ws@0.7.33-hotfixes.1

## 0.7.33-hotfixes.0

### Patch Changes

- Updated dependencies
  - cojson@0.7.33-hotfixes.0
  - cojson-transport-ws@0.7.33-hotfixes.0
  - jazz-tools@0.7.33-hotfixes.0

## 0.7.32

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.32

## 0.7.31

### Patch Changes

- Updated dependencies
- Updated dependencies
  - cojson-transport-ws@0.7.31
  - cojson@0.7.31
  - jazz-tools@0.7.31

## 0.7.30

### Patch Changes

- Updated dependencies
  - cojson-transport-ws@0.7.30

## 0.7.29

### Patch Changes

- Updated dependencies
  - cojson@0.7.29
  - cojson-transport-ws@0.7.29
  - jazz-tools@0.7.29

## 0.7.28

### Patch Changes

- Updated dependencies
  - cojson@0.7.28
  - cojson-transport-ws@0.7.28
  - jazz-tools@0.7.28

## 0.7.27

### Patch Changes

- Updated dependencies
  - cojson-transport-ws@0.7.27

## 0.7.26

### Patch Changes

- Updated dependencies
  - cojson@0.7.26
  - cojson-transport-ws@0.7.26
  - jazz-tools@0.7.26

## 0.7.25

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.25

## 0.7.24

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.24

## 0.7.23

### Patch Changes

- Updated dependencies
  - cojson@0.7.23
  - jazz-tools@0.7.23
  - cojson-transport-ws@0.7.23

## 0.7.22

### Patch Changes

- Updated dependencies
  - cojson-transport-ws@0.7.22

## 0.7.21

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.21

## 0.7.20

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.20

## 0.7.19

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.19

## 0.7.18

### Patch Changes

- Updated dependencies
  - cojson@0.7.18
  - cojson-transport-ws@0.7.18
  - jazz-tools@0.7.18

## 0.7.17

### Patch Changes

- Updated dependencies
  - cojson@0.7.17
  - cojson-transport-ws@0.7.17
  - jazz-tools@0.7.17

## 0.7.16

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.16

## 0.7.14

### Patch Changes

- Updated dependencies
  - cojson@0.7.14
  - jazz-tools@0.7.14
  - cojson-transport-ws@0.7.14

## 0.7.13

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.13

## 0.7.12

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.12

## 0.7.11

### Patch Changes

- Updated dependencies
  - cojson@0.7.11
  - cojson-transport-nodejs-ws@0.7.11
  - jazz-tools@0.7.11

## 0.7.10

### Patch Changes

- Updated dependencies
  - cojson@0.7.10
  - cojson-transport-nodejs-ws@0.7.10
  - jazz-tools@0.7.10

## 0.7.9

### Patch Changes

- Updated dependencies
  - cojson@0.7.9
  - cojson-transport-nodejs-ws@0.7.9
  - jazz-tools@0.7.9

## 0.7.8

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.8

## 0.7.6

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.6

## 0.7.3

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.3

## 0.7.1

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.1

## 0.7.0

### Patch Changes

- 5b188ec: Ensure accounts are synced after creation
- fd86c11: Extract jazz cli into jazz-run package
- Updated dependencies [8636319]
- Updated dependencies [1a35307]
- Updated dependencies [8636319]
- Updated dependencies [1a35307]
- Updated dependencies [96c494f]
- Updated dependencies [59c18c3]
- Updated dependencies [19f52b7]
- Updated dependencies [8636319]
- Updated dependencies [d8fe2b1]
- Updated dependencies [19004b4]
- Updated dependencies [a78f168]
- Updated dependencies [1200aae]
- Updated dependencies [52675c9]
- Updated dependencies [129e2c1]
- Updated dependencies [1cfa279]
- Updated dependencies [704af7d]
- Updated dependencies [1a35307]
- Updated dependencies [460478f]
- Updated dependencies [6b0418f]
- Updated dependencies [e299c3e]
- Updated dependencies [ed5643a]
- Updated dependencies [bde684f]
- Updated dependencies [bf0f8ec]
- Updated dependencies [c4151fc]
- Updated dependencies [63374cc]
- Updated dependencies [8636319]
- Updated dependencies [01ac646]
- Updated dependencies [a5e68a4]
- Updated dependencies [952982e]
- Updated dependencies [1a35307]
- Updated dependencies [5fa277c]
- Updated dependencies [60d5ca2]
- Updated dependencies [21771c4]
- Updated dependencies [77c2b56]
- Updated dependencies [63374cc]
- Updated dependencies [d2e03ff]
- Updated dependencies [354bdcd]
- Updated dependencies [60d5ca2]
- Updated dependencies [69ac514]
- Updated dependencies [f8a5c46]
- Updated dependencies [f0f6f1b]
- Updated dependencies [e5eed5b]
- Updated dependencies [1a44f87]
- Updated dependencies [627d895]
- Updated dependencies [1200aae]
- Updated dependencies [63374cc]
- Updated dependencies [ece35b3]
- Updated dependencies [38d4410]
- Updated dependencies [85d2b62]
- Updated dependencies [fd86c11]
- Updated dependencies [52675c9]
- Updated dependencies [a423eee]
  - jazz-tools@0.7.0
  - cojson@0.7.0
  - cojson-transport-nodejs-ws@0.7.0

## 0.7.0-alpha.42

### Patch Changes

- Updated dependencies
  - jazz-tools@0.7.0-alpha.42
  - cojson@0.7.0-alpha.42
  - cojson-transport-nodejs-ws@0.7.0-alpha.42

## 0.7.0-alpha.41

### Patch Changes

- Updated dependencies
  - cojson-transport-nodejs-ws@0.7.0-alpha.41
  - jazz-tools@0.7.0-alpha.41

## 0.7.0-alpha.39

### Patch Changes

- Updated dependencies
  - cojson@0.7.0-alpha.39
  - cojson-transport-nodejs-ws@0.7.0-alpha.39
  - jazz-tools@0.7.0-alpha.39

## 0.7.0-alpha.38

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - jazz-tools@0.7.0-alpha.38
  - cojson@0.7.0-alpha.38
  - cojson-transport-nodejs-ws@0.7.0-alpha.38

## 0.7.0-alpha.37

### Patch Changes

- Updated dependencies
  - cojson@0.7.0-alpha.37
  - cojson-transport-nodejs-ws@0.7.0-alpha.37
  - jazz-tools@0.7.0-alpha.37

## 0.7.0-alpha.36

### Patch Changes

- Ensure accounts are synced after creation
- Updated dependencies [1a35307]
- Updated dependencies [1a35307]
- Updated dependencies [1a35307]
- Updated dependencies [6b0418f]
- Updated dependencies [1a35307]
  - cojson@0.7.0-alpha.36
  - jazz-tools@0.7.0-alpha.36
  - cojson-transport-nodejs-ws@0.7.0-alpha.36

## 0.7.0-alpha.35

### Patch Changes

- Updated dependencies
- Updated dependencies
  - cojson@0.7.0-alpha.35
  - jazz-tools@0.7.0-alpha.35
  - cojson-transport-nodejs-ws@0.7.0-alpha.35

## 0.7.0-alpha.34

### Patch Changes

- Extract jazz cli into jazz-run package
- Updated dependencies
  - jazz-tools@0.7.0-alpha.34

## 0.7.0-alpha.32

### Patch Changes

- Introduce jazz-tools CLI
- Clean up exports

## 0.7.0-alpha.31

### Patch Changes

- Get rid of self generics, new create syntax

## 0.7.0-alpha.30

### Patch Changes

- CoValue casting & auto-subbing \_owner

## 0.7.0-alpha.29

### Patch Changes

- Reintroduce changes from main
- Updated dependencies
  - cojson@0.7.0-alpha.29

## 0.7.0-alpha.28

### Patch Changes

- Implement profile visibility based on groups & new migration signature
- Updated dependencies
  - cojson@0.7.0-alpha.28

## 0.7.0-alpha.27

### Patch Changes

- Fix CoList.splice / RawCoList.append
- Fix Costream[...].all
- Updated dependencies
  - cojson@0.7.0-alpha.27

## 0.7.0-alpha.26

### Patch Changes

- Fix CoMap.Record.toJSON()

## 0.7.0-alpha.25

### Patch Changes

- Make Account -> Profile a lazy ref schema

## 0.7.0-alpha.24

### Patch Changes

- Relax types of CoMap.\_schema
- Fix schema of Account & Group
- Make sure delete on CoMaps deletes keys
- Updated dependencies
  - cojson@0.7.0-alpha.24

## 0.7.0-alpha.23

### Patch Changes

- CoMap fixes and improvements

## 0.7.0-alpha.22

### Patch Changes

- Fix CoMap \_refs for co.items

## 0.7.0-alpha.21

### Patch Changes

- Add maxWidth option for loading images

## 0.7.0-alpha.20

### Patch Changes

- Make fast-check a direct dependency to help dev time resolution

## 0.7.0-alpha.19

### Patch Changes

- More precise imports from @effect/schema

## 0.7.0-alpha.17

### Patch Changes

- Use effect 3.0

## 0.7.0-alpha.16

### Patch Changes

- Make CoMaps even more subclassable

## 0.7.0-alpha.15

### Patch Changes

- More superclass-compatible CoMaps

## 0.7.0-alpha.14

### Patch Changes

- Fix CoStream types

## 0.7.0-alpha.13

### Patch Changes

- Add .all to CoStreamEntry

## 0.7.0-alpha.12

### Patch Changes

- Fix variance of ID.\_\_type

## 0.7.0-alpha.11

### Patch Changes

- Support stricter TS lint rules
- Updated dependencies
  - cojson@0.7.0-alpha.11

## 0.7.0-alpha.10

### Patch Changes

- Clean up API more & re-add jazz-nodejs
- Updated dependencies
  - cojson@0.7.0-alpha.10

## 0.7.0-alpha.9

### Patch Changes

- Even friendlier for subclassing CoMap

## 0.7.0-alpha.8

### Patch Changes

- More subclass-friendly types in CoMap

## 0.7.0-alpha.7

### Patch Changes

- Consistent proxy based API
- Updated dependencies
  - cojson@0.7.0-alpha.7

## 0.7.0-alpha.6

### Patch Changes

- CoMap fix

## 0.7.0-alpha.5

### Patch Changes

- Refactoring
- Updated dependencies
  - cojson@0.7.0-alpha.5

## 0.7.0-alpha.4

### Patch Changes

- Make refs on list more precise

## 0.7.0-alpha.3

### Patch Changes

- Make refs type more precise

## 0.7.0-alpha.2

### Patch Changes

- Get rid of Co namespace

## 0.7.0-alpha.1

### Patch Changes

- Use effect schema much less
- Updated dependencies
  - cojson@0.7.0-alpha.1

## 0.7.0-alpha.0

### Minor Changes

- New simplified API

### Patch Changes

- Updated dependencies
  - cojson@0.7.0-alpha.0

## 0.6.1

### Patch Changes

- Fix loading of accounts
- Updated dependencies
  - cojson@0.6.5

## 0.6.0

### Minor Changes

- Make addMember and removeMember take loaded Accounts instead of just IDs

### Patch Changes

- Updated dependencies
  - cojson@0.6.0

## 0.5.0

### Minor Changes

- Adding a lot of performance improvements to cojson, add a stresstest for the twit example and make that run smoother in a lot of ways.

### Patch Changes

- Updated dependencies
  - cojson@0.5.0
