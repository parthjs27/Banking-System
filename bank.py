
# Parent class

class User():

    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
    
    def user_details(self):
        print('\n')
        print('User Details: ')
        print('Name:', self.name)
        print('Age: ', self.age)
        print('Gender', self.gender)
        print('\n')


# Child Class

class Bank(User):
    def __init__(self, name, age, gender):
        # Super function helps to reuse the code from the parent/base/super class
        # into child/derived class
        super().__init__(name, age, gender)
        self.balance = 0

    def deposit(self, amount):
        self.amount = amount
        self.balance += self.amount
        print('Amount Deposited')
        print('Account balance has been updated: $', self.balance)
        print('\n')

    def withdraw(self, amount):
        self.amount = amount
        # Condition if withdrawal amount is greater than bank balance
        if self.amount > self.balance:
            print('Insufficient funds | Balance Available: ', self.balance)
            print('\n')
        else:
            self.balance -= self.amount
            print('Amount Withdrawed')
            print('Account has been updated: $', self.balance)
            print('\n')

    def show_balance(self):
        self.user_details()
        print('Account balance: $', self.balance)
        print('\n')

# Creating a object of class Bank
u1 = Bank('Nick', 21, 'Male')

# Calling rhe user details method for printing user details
u1.user_details()

# Depositing 2000$ in our account
u1.deposit(2000)

# Withdrawing 2000$ from our account
u1.withdraw(1000)
u1.withdraw(1000)

u1.show_balance()

#Trying to commit and push
# Hi 














# u1 = User('Neel', 21, 'Male')
# u1.user_details()