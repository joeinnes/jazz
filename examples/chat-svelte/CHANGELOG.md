# passkey-svelte

## 0.0.107

### Patch Changes

- Updated dependencies [c62abef]
  - jazz-tools@0.16.1

## 0.0.106

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

## 0.0.105

### Patch Changes

- Updated dependencies [9633d01]
- Updated dependencies [4beafb7]
  - jazz-tools@0.15.16

## 0.0.104

### Patch Changes

- Updated dependencies [3fe53a3]
  - jazz-tools@0.15.15

## 0.0.103

### Patch Changes

- Updated dependencies [a584590]
- Updated dependencies [9acccb5]
  - jazz-tools@0.15.14

## 0.0.102

### Patch Changes

- Updated dependencies [6c76ff8]
  - jazz-tools@0.15.13

## 0.0.101

### Patch Changes

- Updated dependencies [d1c1b0c]
- Updated dependencies [cf4ad72]
  - jazz-tools@0.15.12

## 0.0.100

### Patch Changes

- Updated dependencies [bdc9aee]
  - jazz-tools@0.15.11

## 0.0.99

### Patch Changes

- Updated dependencies [9815ec6]
- Updated dependencies [b4fdab4]
  - jazz-tools@0.15.10

## 0.0.98

### Patch Changes

- Updated dependencies [27b4837]
  - jazz-tools@0.15.9

## 0.0.97

### Patch Changes

- Updated dependencies [3844666]
  - jazz-tools@0.15.8

## 0.0.96

### Patch Changes

- Updated dependencies [c09b636]
  - jazz-tools@0.15.7

## 0.0.95

### Patch Changes

- Updated dependencies [a5ceaff]
  - jazz-tools@0.15.6

## 0.0.94

### Patch Changes

- Updated dependencies [23bfea5]
- Updated dependencies [e4ba23c]
- Updated dependencies [4b89838]
  - jazz-tools@0.15.5

## 0.0.93

### Patch Changes

- jazz-tools@0.15.4

## 0.0.92

### Patch Changes

- Updated dependencies [45f73a7]
  - jazz-tools@0.15.3

## 0.0.91

### Patch Changes

- Updated dependencies [0e7e532]
  - jazz-tools@0.15.2

## 0.0.90

### Patch Changes

- Updated dependencies [0e3a4d2]
- Updated dependencies [b110f00]
  - jazz-tools@0.15.1

## 0.0.89

### Patch Changes

- Updated dependencies [1378a1f]
- Updated dependencies [0fa051a]
  - jazz-tools@0.15.0

## 0.0.88

### Patch Changes

- Updated dependencies [06c5a1c]
  - jazz-tools@0.14.28
  - jazz-browser-media-images@0.14.28
  - jazz-svelte@0.14.28

## 0.0.87

### Patch Changes

- Updated dependencies [a026073]
  - jazz-tools@0.14.27
  - jazz-browser-media-images@0.14.27
  - jazz-svelte@0.14.27

## 0.0.86

### Patch Changes

- Updated dependencies [e35a380]
  - jazz-svelte@0.14.26
  - jazz-tools@0.14.26
  - jazz-browser-media-images@0.14.26

## 0.0.85

### Patch Changes

- Updated dependencies [99a2d9b]
  - jazz-tools@0.14.25
  - jazz-browser-media-images@0.14.25
  - jazz-svelte@0.14.25

## 0.0.84

### Patch Changes

- jazz-svelte@0.13.30
- jazz-tools@0.13.30

## 0.0.83

### Patch Changes

- jazz-svelte@0.13.29
- jazz-tools@0.13.29

## 0.0.82

### Patch Changes

- jazz-svelte@0.13.28
- jazz-tools@0.13.28

## 0.0.81

### Patch Changes

- jazz-svelte@0.13.27
- jazz-tools@0.13.27

## 0.0.80

### Patch Changes

- Updated dependencies [ff846d9]
  - jazz-tools@0.13.26
  - jazz-svelte@0.13.26

## 0.0.79

### Patch Changes

- jazz-svelte@0.13.25
- jazz-tools@0.13.25

## 0.0.78

### Patch Changes

- Updated dependencies [ec546b4]
  - jazz-svelte@0.13.24

## 0.0.77

### Patch Changes

- Updated dependencies [3431076]
- Updated dependencies [02a240c]
  - jazz-svelte@0.13.23
  - jazz-tools@0.13.23

## 0.0.76

### Patch Changes

- jazz-svelte@0.13.21
- jazz-tools@0.13.21

## 0.0.75

### Patch Changes

- Updated dependencies [439f0fe]
  - jazz-tools@0.13.20
  - jazz-svelte@0.13.20

## 0.0.74

### Patch Changes

- Updated dependencies [80530a4]
  - jazz-tools@0.13.19
  - jazz-svelte@0.13.19

## 0.0.73

### Patch Changes

- Updated dependencies [761759c]
  - jazz-tools@0.13.18
  - jazz-svelte@0.13.18

## 0.0.72

### Patch Changes

- jazz-svelte@0.13.17
- jazz-tools@0.13.17

## 0.0.71

### Patch Changes

- jazz-svelte@0.13.16
- jazz-tools@0.13.16

## 0.0.70

### Patch Changes

- jazz-svelte@0.13.15
- jazz-tools@0.13.15

## 0.0.69

### Patch Changes

- jazz-svelte@0.13.14
- jazz-tools@0.13.14

## 0.0.68

### Patch Changes

- jazz-svelte@0.13.13
- jazz-tools@0.13.13

## 0.0.67

### Patch Changes

- Updated dependencies [4547525]
  - jazz-tools@0.13.12
  - jazz-svelte@0.13.12

## 0.0.66

### Patch Changes

- Updated dependencies [17273a6]
  - jazz-tools@0.13.11
  - jazz-svelte@0.13.11

## 0.0.65

### Patch Changes

- jazz-svelte@0.13.10
- jazz-tools@0.13.10

## 0.0.64

### Patch Changes

- Updated dependencies [a6cf01f]
  - jazz-tools@0.13.9
  - jazz-svelte@0.13.9

## 0.0.63

### Patch Changes

- jazz-svelte@0.13.7

## 0.0.62

### Patch Changes

- jazz-svelte@0.13.5

## 0.0.61

### Patch Changes

- jazz-svelte@0.13.4

## 0.0.60

### Patch Changes

- jazz-svelte@0.13.3

## 0.0.59

### Patch Changes

- jazz-svelte@0.13.2

## 0.0.58

### Patch Changes

- jazz-svelte@0.13.0

## 0.0.57

### Patch Changes

- jazz-svelte@0.12.2

## 0.0.56

### Patch Changes

- jazz-svelte@0.12.1

## 0.0.55

### Patch Changes

- jazz-svelte@0.12.0

## 0.0.54

### Patch Changes

- jazz-svelte@0.11.8

## 0.0.53

### Patch Changes

- jazz-svelte@0.11.7

## 0.0.52

### Patch Changes

- 1bfa9bb: Removed when="singedUp" from examples apps' Jazz providers. This is a really niche use-case option and can lead to broken-feeling experiences when anonymous users try to load something.
  - jazz-svelte@0.11.6

## 0.0.51

### Patch Changes

- jazz-svelte@0.11.5

## 0.0.50

### Patch Changes

- jazz-svelte@0.11.4

## 0.0.49

### Patch Changes

- jazz-svelte@0.11.3

## 0.0.48

### Patch Changes

- jazz-svelte@0.11.2

## 0.0.47

### Patch Changes

- jazz-svelte@0.11.0

## 0.0.46

### Patch Changes

- jazz-svelte@0.10.15

## 0.0.45

### Patch Changes

- jazz-svelte@0.10.14

## 0.0.44

### Patch Changes

- jazz-svelte@0.10.13

## 0.0.43

### Patch Changes

- Updated dependencies [4612e05]
  - jazz-svelte@0.10.12

## 0.0.42

### Patch Changes

- jazz-svelte@0.10.9

## 0.0.41

### Patch Changes

- jazz-svelte@0.10.8

## 0.0.40

### Patch Changes

- Updated dependencies [1136d9b]
  - jazz-svelte@0.10.7

## 0.0.39

### Patch Changes

- jazz-svelte@0.10.6

## 0.0.38

### Patch Changes

- jazz-svelte@0.10.5

## 0.0.37

### Patch Changes

- jazz-svelte@0.10.4

## 0.0.36

### Patch Changes

- jazz-svelte@0.10.3

## 0.0.35

### Patch Changes

- jazz-svelte@0.10.2

## 0.0.34

### Patch Changes

- jazz-svelte@0.10.1

## 0.0.33

### Patch Changes

- Updated dependencies [b426342]
  - jazz-svelte@0.10.0

## 0.0.32

### Patch Changes

- jazz-svelte@0.9.23

## 0.0.31

### Patch Changes

- jazz-svelte@0.9.22

## 0.0.30

### Patch Changes

- jazz-svelte@0.9.21

## 0.0.29

### Patch Changes

- jazz-svelte@0.9.20

## 0.0.28

### Patch Changes

- jazz-svelte@0.9.19

## 0.0.27

### Patch Changes

- jazz-svelte@0.9.18

## 0.0.26

### Patch Changes

- jazz-svelte@0.9.17

## 0.0.25

### Patch Changes

- jazz-svelte@0.9.16

## 0.0.24

### Patch Changes

- jazz-svelte@0.9.15

## 0.0.23

### Patch Changes

- jazz-svelte@0.9.14

## 0.0.22

### Patch Changes

- jazz-svelte@0.9.13

## 0.0.21

### Patch Changes

- jazz-svelte@0.9.12

## 0.0.20

### Patch Changes

- jazz-svelte@0.9.11

## 0.0.19

### Patch Changes

- jazz-svelte@0.9.10

## 0.0.18

### Patch Changes

- jazz-svelte@0.9.9

## 0.0.17

### Patch Changes

- jazz-svelte@0.9.8

## 0.0.16

### Patch Changes

- jazz-svelte@0.9.1

## 0.0.15

### Patch Changes

- Updated dependencies [9dd8d95]
  - jazz-svelte@0.9.0

## 0.0.14

### Patch Changes

- jazz-svelte@0.8.51

## 0.0.13

### Patch Changes

- jazz-svelte@0.8.50

## 0.0.12

### Patch Changes

- jazz-svelte@0.8.49

## 0.0.11

### Patch Changes

- jazz-svelte@0.8.48

## 0.0.10

### Patch Changes

- jazz-svelte@0.8.45

## 0.0.9

### Patch Changes

- jazz-svelte@0.8.44

## 0.0.8

### Patch Changes

- jazz-svelte@0.8.41

## 0.0.7

### Patch Changes

- jazz-svelte@0.8.40

## 0.0.6

### Patch Changes

- Updated dependencies [aa21072]
  - jazz-svelte@0.8.39

## 0.0.5

### Patch Changes

- jazz-svelte@0.8.38

## 0.0.4

### Patch Changes

- jazz-svelte@0.0.4

## 0.0.3

### Patch Changes

- jazz-svelte@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [0e59e65]
  - jazz-svelte@0.0.2
