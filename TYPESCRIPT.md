# TypeScript Configuration with Yarn

This project now has full TypeScript support using Yarn as the package manager.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Type checking
yarn type-check

# Build for production
yarn build

# Format code
yarn format

# Lint code
yarn lint

# Start Storybook
yarn storybook
```

## 📁 Project Structure

```
src/
├── types/
│   └── index.ts          # Shared TypeScript interfaces
├── components/
│   ├── MyTask.vue        # Example component with TypeScript
│   └── Task.vue          # Another TypeScript component
└── main.ts               # Main entry point (TypeScript)
```

## 🔧 TypeScript Features

### Type-Safe Props with Validators

The `MyTask.vue` component demonstrates advanced prop validation:

```vue
<script lang="ts" setup>
import type { Task } from "@/types";
import type { PropType } from "vue";

defineProps({
  task: {
    type: Object as PropType<Task>,
    default: (): Task => ({ id: "", state: "todo", title: "" }),
    validator: (task: Task): boolean => {
      // Comprehensive validation logic
      // - Checks required properties
      // - Validates types
      // - Ensures valid state values
    },
  },
});
</script>
```

### Shared Type Definitions

All types are defined in `src/types/index.ts`:

```typescript
export interface Task {
  id: string;
  state: "todo" | "done" | "archived" | "pinned";
  title: string;
}
```

## ⚙️ Configuration Files

- `tsconfig.json` - TypeScript configuration
- `.eslintrc.cjs` - ESLint with TypeScript support
- `env.d.ts` - TypeScript environment declarations
- `.vscode/settings.json` - VS Code workspace settings
