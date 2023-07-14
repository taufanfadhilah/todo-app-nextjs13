export default interface Todo {
  id: string;
  title: string;
  note: string;
  is_checked?: boolean | null;
}
