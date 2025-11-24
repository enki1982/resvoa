export async function createPaymentIntent(
  taskId: string,
  paymentMethodId: string,
  accessToken: string
) {
  const response = await fetch('/api/payments/create-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      taskId,
      paymentMethodId,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error creating payment intent');
  }

  return response.json();
}

export async function completeTask(taskId: string, accessToken: string) {
  const response = await fetch(`/api/tasks/${taskId}/complete`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error completing task');
  }

  return response.json();
}

export async function cancelTask(taskId: string, accessToken: string) {
  const response = await fetch(`/api/tasks/${taskId}/cancel`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error cancelling task');
  }

  return response.json();
}
