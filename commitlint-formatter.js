module.exports = (report) => {
  const { results, errors } = report;

  if (errors && errors.length > 0) {
    return [
      '❌ Commitlint encountered an error:',
      ...errors.map((e) => `   🛑 ${e.message}`),
    ].join('\n');
  }

  const allErrors = results
    .map((result) =>
      result.errors.map((err) => ({
        file: result.input,
        message: err.message,
      })),
    )
    .flat();

  if (allErrors.length === 0) {
    return '✅ Commit message is valid!';
  }

  return [
    '🚫 Invalid commit message:\n',
    ...allErrors.map((e) => `👉 ${e.message} (in: ${e.file})`),
    '',
    '💡 Format must follow: type(scope): message',
    '📌 Example: feat(tms): implement login flow',
    '📚 Types: build, chore, ci, docs, feat, fix, refactor, revert, style, test, modify',
    '🔖 Scopes: publishing, tms, pnt, partners',
  ].join('\n');
};
