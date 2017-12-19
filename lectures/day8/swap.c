#include <stdio.h>

void swap(int a, int b) {
	int t = a;
	a = b;
	b = a;
}

void swap2(int *a, int *b) {
	int t = *a;
	*a = *b;
	*b = t;
}

int main(void) {
	int a = 3;
	int b = 5;
	swap(a,b);
	printf("%d %d\n", a, b);
	swap2(&a, &b);
	printf("%d %d\n", a, b);
	printf("%p %p\n", &a, &b);
}
