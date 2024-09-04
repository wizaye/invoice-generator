import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  // CircleIcon,
  CrossCircledIcon,
  StopwatchIcon,
  QuestionMarkCircledIcon
} from '@radix-ui/react-icons';

// Product categories (e.g., type of product)
export const categories = [
  {
    value: 'electronics',
    label: 'Electronics',
  },
  {
    value: 'clothing',
    label: 'Clothing',
  },
  {
    value: 'groceries',
    label: 'Groceries',
  },
  {
    value: 'home_goods',
    label: 'Home Goods',
  },
];

// Product statuses (e.g., availability in inventory)
export const statuses = [
  {
    value: 'in_stock',
    label: 'In Stock',
    icon: CheckCircledIcon,
  },
  {
    value: 'out_of_stock',
    label: 'Out of Stock',
    icon: CrossCircledIcon,
  },
  {
    value: 'discontinued',
    label: 'Discontinued',
    icon: StopwatchIcon,
  },
  {
    value: 'backorder',
    label: 'Backorder',
    icon: QuestionMarkCircledIcon,
  },
];

// Product priorities (e.g., high-priority restocking or promotion)
export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon,
  },
];
