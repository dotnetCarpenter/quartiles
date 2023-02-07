/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig ({
  test: {
    include: ["spec/*.spec.{js,mjs}"]
  },
})
