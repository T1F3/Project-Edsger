def quicksort(arr):
	quicksort_h(arr, 0, len(arr) - 1)
	return arr

def quicksort_h(arr, start, end):
	if start > end:
		return
	piv_ind = partition(arr, start, end)
	quicksort_h(arr, start, piv_ind - 1)
	quicksort_h(arr, piv_ind + 1, end)

def partition(arr, start, end):
	piv = arr[end]
	piv_ind = start
	for i in range(start, end):
		if arr[i] < piv:
			arr[i], arr[piv_ind] = arr[piv_ind], arr[i]
			piv_ind += 1
	arr[piv_ind], arr[end] = arr[end], arr[piv_ind]
	return piv_ind


quicksort([10, 80, 30, 90, 40, 50, 70])


