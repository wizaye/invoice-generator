import {
  CheckCircledIcon,
  CrossCircledIcon,
  ClockIcon,
} from '@radix-ui/react-icons'

export const paymentStatuses = [
  {
    value: 'paid',
    label: 'Paid',
    icon: CheckCircledIcon,
  },
  {
    value: 'pending',
    label: 'Pending',
    icon: ClockIcon,
  },
  {
    value: 'overdue',
    label: 'Overdue',
    icon: CrossCircledIcon,
  },
]
